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
import * as Mappers from "../models/examplesMappers";
import * as Parameters from "../models/parameters";
import { LUISAuthoringClientContext } from "../lUISAuthoringClientContext";

/** Class representing a Examples. */
export class Examples {
  private readonly client: LUISAuthoringClientContext;

  /**
   * Create a Examples.
   * @param {LUISAuthoringClientContext} client Reference to the service client.
   */
  constructor(client: LUISAuthoringClientContext) {
    this.client = client;
  }

  /**
   * Adds a labeled example to the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObject An example label with the expected intent and entities.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesAddResponse>
   */
  add(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase): Promise<Models.ExamplesAddResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObject An example label with the expected intent and entities.
   * @param callback The callback
   */
  add(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObject An example label with the expected intent and entities.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  add(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LabelExampleResponse>, callback?: msRest.ServiceCallback<Models.LabelExampleResponse>): Promise<Models.ExamplesAddResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        exampleLabelObject,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.ExamplesAddResponse>;
  }

  /**
   * Adds a batch of labeled examples to the application.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObjectArray Array of examples.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesBatchResponse>
   */
  batch(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase): Promise<Models.ExamplesBatchResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObjectArray Array of examples.
   * @param callback The callback
   */
  batch(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObjectArray Array of examples.
   * @param options The optional parameters
   * @param callback The callback
   */
  batch(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  batch(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchLabelExample[]>, callback?: msRest.ServiceCallback<Models.BatchLabelExample[]>): Promise<Models.ExamplesBatchResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        exampleLabelObjectArray,
        options
      },
      batchOperationSpec,
      callback) as Promise<Models.ExamplesBatchResponse>;
  }

  /**
   * Returns examples to be reviewed.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesListResponse>
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.ExamplesListOptionalParams): Promise<Models.ExamplesListResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options: Models.ExamplesListOptionalParams, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  list(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, options?: Models.ExamplesListOptionalParams | msRest.ServiceCallback<Models.LabeledUtterance[]>, callback?: msRest.ServiceCallback<Models.LabeledUtterance[]>): Promise<Models.ExamplesListResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExamplesListResponse>;
  }

  /**
   * Deletes the labeled example with the specified ID.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleId The example ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesDeleteMethodResponse>
   */
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase): Promise<Models.ExamplesDeleteMethodResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleId The example ID.
   * @param callback The callback
   */
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleId: number, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleId The example ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.ExamplesDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        versionId,
        exampleId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.ExamplesDeleteMethodResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/example",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "exampleLabelObject",
    mapper: {
      ...Mappers.ExampleLabelObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.LabelExampleResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const batchOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "exampleLabelObjectArray",
    mapper: {
      required: true,
      serializedName: "exampleLabelObjectArray",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "ExampleLabelObject"
          }
        }
      }
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    207: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LabeledUtterance"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "apps/{appId}/versions/{versionId}/examples/{exampleId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId,
    Parameters.versionId0,
    Parameters.exampleId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
