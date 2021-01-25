/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { QuantumJobClient } from "../quantumJobClient";
import { Quota, QuotasListResponse, QuotasListNextResponse } from "../models";

/** Class representing a Quotas. */
export class Quotas {
  private readonly client: QuantumJobClient;

  /**
   * Initialize a new instance of the class Quotas class.
   * @param client Reference to the service client
   */
  constructor(client: QuantumJobClient) {
    this.client = client;
  }

  /**
   * List quotas for the given workspace.
   * @param options The options parameters.
   */
  public list(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<Quota> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Quota[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(options?: coreHttp.OperationOptions): AsyncIterableIterator<Quota> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List quotas for the given workspace.
   * @param options The options parameters.
   */
  private _list(options?: coreHttp.OperationOptions): Promise<QuotasListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(operationArguments, listOperationSpec) as Promise<
      QuotasListResponse
    >;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<QuotasListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(operationArguments, listNextOperationSpec) as Promise<
      QuotasListNextResponse
    >;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}/quotas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaList
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaList
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};