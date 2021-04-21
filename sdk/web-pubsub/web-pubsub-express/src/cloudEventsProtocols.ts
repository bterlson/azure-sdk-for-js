// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Response of the connect event.
 */
export interface ConnectResponse {
  /**
   * Set the groups the connection would like to join.
   */
  groups?: string[];
  /**
   * Set the roles the connection belongs to.
   */
  roles?: string[];
  /**
   * Set the userId for the connection.
   */
  userId?: string;
  /**
   * Set the subprotocol for the connection to complete WebSocket handshake.
   */
  subprotocol?: string;
}

/**
 * The connection context representing the client WebSocket connection.
 */
export interface ConnectionContext {
  /**
   * The hub the connection belongs to.
   */
  hub: string;
  /**
   * The Id of the connection.
   */
  connectionId: string;
  /**
   * The event name of this CloudEvents request.
   */
  eventName: string;
  /**
   * The host name this CloudEvents request comes from.
   */
  host: string;
  /**
   * The user id of the connection.
   */
  userId?: string;
  /**
   * The subprotocol of this connection.
   */
  subprotocol?: string;
}

/**
 * Request for the connect event.
 */
export interface ConnectRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext;
  /**
   * The claims that the client WebSocket connection has when it connects.
   */
  claims?: { [key: string]: string[] };
  /**
   * The queries that the client WebSocket connection has when it connects.
   */
  queries?: { [key: string]: string[] };
  /**
   * The subprotocols that the client WebSocket connection uses to do handshake.
   */
  subprotocols?: string[];
  /**
   * The client certificate info that the client WebSocket connection uses to connect.
   */
  clientCertificates?: Certificate[];
}

/**
 * The client certificate.
 */
export interface Certificate {
  /**
   * The thumbprint of the certificate.
   */
  thumbprint: string;
}

/**
 * Request for the connected event.
 */
export interface ConnectedRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext;
}

/**
 * Request for the user event.
 */
export interface UserEventRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext;

  /**
   * The content data.
   */
  data: string | ArrayBuffer;
  /**
   * The type of the data.
   */
  dataType: "binary" | "text" | "json";
}

/**
 * Request for the disconnected event.
 */
export interface DisconnectedRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext;
  /**
   * The reason that the connection disconnects.
   */
  reason?: string;
}

/**
 * The handler to set connect event response
 */
export interface ConnectResponseHandler {
  /**
   * Return success response to the service.
   * @param response The response for the connect event.
   */
  success(response?: ConnectResponse): void;
  /**
   * Return failed response and the service will reject the client WebSocket connection.
   * @param code Code can be 400 user error, 401 unauthorized and 500 server error.
   * @param detail The detail of the error.
   */
  fail(code: 400 | 401 | 500, detail?: string): void;
}

/**
 * The handler to set user event response
 */
export interface UserEventResponseHandler {
  /**
   * Return success response with data to be delivered to the client WebSocket connection.
   * @param data The payload data to be returned to the client.
   * @param dataType The type of the payload data.
   */
  success(data?: string | ArrayBuffer, dataType?: "binary" | "text" | "json"): void;
  /**
   * Return failed response and the service will close the client WebSocket connection.
   * @param code Code can be 400 user error, 401 unauthorized and 500 server error.
   * @param detail The detail of the error.
   */
  fail(code: 400 | 401 | 500, detail?: string): void;
}

/**
 * The options for the CloudEvents handler.
 */
export interface WebPubSubEventHandlerOptions {
  /**
   * Custom serving path for the path of the CloudEvents handler.
   */
  path?: string;

  /**
   * Configures if you'd like to dump the incoming HTTP request.
   */
  dumpRequest?: boolean;

  /**
   * Handle 'connect' event, the service waits for the response to proceed.
   */
  handleConnect?: (
    connectRequest: ConnectRequest,
    connectResponse: ConnectResponseHandler
  ) => Promise<void>;

  /**
   * Handle user events, the service waits for the response to proceed.
   */
  handleUserEvent?: (
    userEventRequest: UserEventRequest,
    userEventResponse: UserEventResponseHandler
  ) => Promise<void>;

  /**
   * Event trigger for "connected" unblocking event. This is an unblocking event and the service does not wait for the response.
   */
  onConnected?: (connectedRequest: ConnectedRequest) => Promise<void>;

  /**
   *
   * Event triggers for "disconnected" unblocking event. This is an unblocking event and the service does not wait for the response.
   */
  onDisconnected?: (disconnectedRequest: DisconnectedRequest) => Promise<void>;
}