// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as log from "./log";
import { ConnectionContext } from "./connectionContext";
import { Receiver, MessageReceiverOptions, SessionReceiver } from "./receiver";
import { ReceivedMessageInfo } from "./serviceBusMessage";
import { Client } from "./client";
import { CorrelationFilter, RuleDescription } from "./core/managementClient";
import { MessageSession, SessionReceiverOptions } from "./session/messageSession";
import { throwErrorIfConnectionClosed } from "./util/utils";
import { AmqpError, generate_uuid } from "rhea-promise";
import { ClientEntityContext } from "./clientEntityContext";

/**
 * Describes the client that allows interacting with a Service Bus Subscription.
 * Use the `createSubscriptionClient` function on the Namespace object to instantiate a
 * SubscriptionClient
 * @class SubscriptionClient
 */
export class SubscriptionClient implements Client {
  /**
   * @property {string}  The topic name.
   */
  readonly topicName: string;
  /**
   * @property {string}  The subscription name.
   */
  readonly subscriptionName: string;

  /**
   * @property {string} defaultRuleName Name of the default rule on the subscription.
   */
  readonly defaultRuleName: string = "$Default";

  /**
   * @property {string} The entitypath for the Service Bus Subscription for which this client is created.
   */
  readonly entityPath: string;
  /**
   * @property {string} A unique identifier for the client.
   */
  readonly id: string;
  /**
   * @property {boolean} _isClosed Denotes if close() was called on this client.
   */
  private _isClosed: boolean = false;
  /**
   * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
   */
  private _context: ClientEntityContext;

  private _currentReceiver: Receiver | undefined;

  /**
   * Constructor for SubscriptionClient.
   * This is not meant for the user to call directly.
   * The user should use the `createSubscriptionClient` on the Namespace instead.
   *
   * @constructor
   * @internal
   * @param topicName - The Topic name.
   * @param subscriptionName - The Subscription name.
   * @param context - The connection context to create the SubscriptionClient.
   */
  constructor(topicName: string, subscriptionName: string, context: ConnectionContext) {
    throwErrorIfConnectionClosed(context);

    this.entityPath = `${topicName}/Subscriptions/${subscriptionName}`;
    this.id = `${this.entityPath}/${generate_uuid()}`;
    this._context = ClientEntityContext.create(this.entityPath, context);

    this.topicName = topicName;
    this.subscriptionName = subscriptionName;
  }

  /**
   * Closes the AMQP link for the receivers created by this client.
   * Once closed, neither the SubscriptionClient nor its recievers can be used for any
   * further operations. Use the `createSubscriptionClient` function on the Namespace object to
   * instantiate a new SubscriptionClient.
   *
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    try {
      if (this._context.namespace.connection && this._context.namespace.connection.isOpen()) {
        // Close the sessionManager.
        if (this._context.sessionManager) {
          this._context.sessionManager.close();
        }

        // Close the streaming and batching receivers.
        if (this._currentReceiver) {
          await this._currentReceiver.close();
        }

        // Close all the MessageSessions.
        for (const messageSessionId of Object.keys(this._context.messageSessions)) {
          await this._context.messageSessions[messageSessionId].close();
        }

        // Make sure that we clear the map of deferred messages
        this._context.requestResponseLockedMessages.clear();

        // Delete the reference in ConnectionContext
        await this._context.clearClientReference(this.id);

        // Mark this client as closed, so that we can show appropriate errors for subsequent usage
        this._isClosed = true;

        log.subscriptionClient("Closed the subscription client '%s'.", this.id);
      }
    } catch (err) {
      const msg =
        `An error occurred while closing the subscription client ` +
        `"${this.id}": ${JSON.stringify(err)} `;
      log.error(msg);
      throw new Error(msg);
    }
  }

  /**
   * Will reconnect the subscritpionClient and its receiver links.
   * This is meant for the library to use to resume receiving when retryable errors are seen.
   * This is not meant for the consumer of this library to use.
   * @ignore
   * @param error Error if any due to which we are attempting to reconnect
   */
  async detached(error?: AmqpError | Error): Promise<void> {
    try {
      await this._context.detached(error);
    } catch (err) {
      log.error(
        "[%s] [%s] An error occurred while reconnecting the client: %O.",
        this._context.namespace.connectionId,
        this.id,
        err
      );
    }
  }

  /**
   * Gets a Receiver to be used for receiving messages in batches or by registering handlers.
   *
   * @param options Options for creating the receiver.
   */
  getReceiver(options?: MessageReceiverOptions): Receiver {
    this.throwErrorIfClientOrConnectionClosed();
    if (!this._currentReceiver || this._currentReceiver.isClosed) {
      this._currentReceiver = new Receiver(this._context, options);
    }
    return this._currentReceiver;
  }

  /**
   * Fetches the next batch of active messages (including deferred but not deadlettered messages).
   * The first call to `peek()` fetches the first active message. Each subsequent call fetches the
   * subsequent message.
   *
   * Unlike a `received` message, `peeked` message is a read-only version of the message.
   * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
   *
   * @param [messageCount] The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedSBMessage[]>
   */
  async peek(messageCount?: number): Promise<ReceivedMessageInfo[]> {
    this.throwErrorIfClientOrConnectionClosed();
    return this._context.managementClient!.peek(messageCount);
  }

  /**
   * Peeks the desired number of active messages (including deferred but not deadlettered messages)
   * from the specified sequence number.
   *
   * Unlike a `received` message, `peeked` message is a read-only version of the message.
   * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
   *
   * @param fromSequenceNumber The sequence number from where to read the message.
   * @param [messageCount] The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedSBMessage[]>
   */
  async peekBySequenceNumber(
    fromSequenceNumber: Long,
    messageCount?: number
  ): Promise<ReceivedMessageInfo[]> {
    this.throwErrorIfClientOrConnectionClosed();
    return this._context.managementClient!.peekBySequenceNumber(fromSequenceNumber, {
      messageCount: messageCount
    });
  }

  //#region topic-filters

  /**
   * Get all the rules associated with the subscription
   */
  async getRules(): Promise<RuleDescription[]> {
    this.throwErrorIfClientOrConnectionClosed();
    return this._context.managementClient!.getRules();
  }

  /**
   * Removes the rule on the subscription identified by the given rule name.
   * @param ruleName
   */
  async removeRule(ruleName: string): Promise<void> {
    this.throwErrorIfClientOrConnectionClosed();
    return this._context.managementClient!.removeRule(ruleName);
  }

  /**
   * Adds a rule on the subscription as defined by the given rule name, filter and action.
   * Remember to remove the default true filter on the subscription before adding a rule,
   * otherwise, the added rule will have no affect as the true filter will always result in
   * the subscription receiving all messages.
   * @param ruleName Name of the rule
   * @param filter A Boolean, SQL expression or a Correlation filter. For SQL Filter syntax, see
   * {@link https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-filter SQLFilter syntax}.
   * @param sqlRuleActionExpression Action to perform if the message satisfies the filtering expression. For SQL Rule Action syntax,
   * see {@link https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-rule-action SQLRuleAction syntax}.
   */
  async addRule(
    ruleName: string,
    filter: boolean | string | CorrelationFilter,
    sqlRuleActionExpression?: string
  ): Promise<void> {
    this.throwErrorIfClientOrConnectionClosed();
    return this._context.managementClient!.addRule(ruleName, filter, sqlRuleActionExpression);
  }

  //#endregion

  //#region sessions

  // /**
  //  * Lists the ids of the sessions on the ServiceBus Subscription.
  //  * @param maxNumberOfSessions Maximum number of sessions.
  //  * @param lastUpdateTime Filter to include only sessions updated after a given time. Default
  //  * value is 3 days before the current time.
  //  */
  // async listMessageSessions(
  //   maxNumberOfSessions: number,
  //   lastUpdatedTime?: Date
  // ): Promise<string[]> {
  // this.throwErrorIfClientOrConnectionClosed();
  //   return this._context.managementClient!.listMessageSessions(
  //     0,
  //     maxNumberOfSessions,
  //     lastUpdatedTime
  //   );
  // }

  /**
   * Gets a SessionReceiver for receiving messages in batches or by registering handlers from a
   * session enabled Subscription. When no sessionId is given, a random session among the available
   * sessions is used.
   *
   * @param options Options to provide sessionId and ReceiveMode for receiving messages from the
   * session enabled Servicebus Subscription.
   *
   * @returns SessionReceiver An instance of a SessionReceiver to receive messages from the session.
   */
  async getSessionReceiver(options?: SessionReceiverOptions): Promise<SessionReceiver> {
    this.throwErrorIfClientOrConnectionClosed();
    if (!options) options = {};
    if (options.sessionId) {
      if (
        this._context.messageSessions[options.sessionId] &&
        this._context.messageSessions[options.sessionId].isOpen()
      ) {
        throw new Error(
          `Close the current session receiver for sessionId ${
            options.sessionId
          } before using "getSessionReceiver" to create a new one for the same sessionId`
        );
      }
    }
    this._context.isSessionEnabled = true;
    const messageSession = await MessageSession.create(this._context, options);
    if (messageSession.sessionId) {
      delete this._context.expiredMessageSessions[messageSession.sessionId];
    }
    return new SessionReceiver(this._context, messageSession);
  }

  //#endregion

  /**
   * Throws error if this subscriptionClient has been closed
   * @param client
   */
  private throwErrorIfClientOrConnectionClosed(): void {
    throwErrorIfConnectionClosed(this._context.namespace);
    if (this._isClosed) {
      throw new Error("The subscriptionClient has been closed and can no longer be used.");
    }
  }
}
