/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/certificateMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a Certificate. */
export class Certificate {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a Certificate.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of all certificates in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.CertificateListByServiceOptionalParams): Promise<Models.CertificateListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.CertificateCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.CertificateListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.CertificateCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.CertificateListByServiceOptionalParams | msRest.ServiceCallback<Models.CertificateCollection>, callback?: msRest.ServiceCallback<Models.CertificateCollection>): Promise<Models.CertificateListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.CertificateListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the certificate specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, certificateId: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, certificateId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, certificateId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, certificateId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.CertificateGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        certificateId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.CertificateGetEntityTagResponse>;
  }

  /**
   * Gets the details of the certificate specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, certificateId: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, certificateId: string, callback: msRest.ServiceCallback<Models.CertificateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, certificateId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CertificateContract>): void;
  get(resourceGroupName: string, serviceName: string, certificateId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateContract>, callback?: msRest.ServiceCallback<Models.CertificateContract>): Promise<Models.CertificateGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        certificateId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CertificateGetResponse>;
  }

  /**
   * Creates or updates the certificate being used for authentication with the backend.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param parameters Create or Update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, certificateId: string, parameters: Models.CertificateCreateOrUpdateParameters, options?: Models.CertificateCreateOrUpdateOptionalParams): Promise<Models.CertificateCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param parameters Create or Update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, certificateId: string, parameters: Models.CertificateCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.CertificateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param parameters Create or Update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, certificateId: string, parameters: Models.CertificateCreateOrUpdateParameters, options: Models.CertificateCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CertificateContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, certificateId: string, parameters: Models.CertificateCreateOrUpdateParameters, options?: Models.CertificateCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.CertificateContract>, callback?: msRest.ServiceCallback<Models.CertificateContract>): Promise<Models.CertificateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        certificateId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.CertificateCreateOrUpdateResponse>;
  }

  /**
   * Deletes specific certificate.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, certificateId: string, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, certificateId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   * Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, certificateId: string, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, certificateId: string, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        certificateId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of all certificates in the specified service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CertificateCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CertificateCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CertificateCollection>, callback?: msRest.ServiceCallback<Models.CertificateCollection>): Promise<Models.CertificateListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.CertificateListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.CertificateGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.CertificateGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CertificateCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract
    },
    201: {
      bodyMapper: Mappers.CertificateContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.certificateId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
