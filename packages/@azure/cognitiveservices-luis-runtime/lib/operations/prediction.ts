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
import * as Mappers from "../models/predictionMappers";
import * as Parameters from "../models/parameters";
import { LUISRuntimeClientContext } from "../lUISRuntimeClientContext";

/** Class representing a Prediction. */
export class Prediction {
  private readonly client: LUISRuntimeClientContext;

  /**
   * Create a Prediction.
   * @param {LUISRuntimeClientContext} client Reference to the service client.
   */
  constructor(client: LUISRuntimeClientContext) {
    this.client = client;
  }

  /**
   * Gets predictions for a given utterance, in the form of intents and entities. The current maximum
   * query size is 500 characters.
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The LUIS application ID (Guid).
   * @param query The utterance to predict.
   * @param [options] The optional parameters
   * @returns Promise<Models.PredictionResolveResponse>
   */
  resolve(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, query: string, options?: Models.PredictionResolveOptionalParams): Promise<Models.PredictionResolveResponse>;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The LUIS application ID (Guid).
   * @param query The utterance to predict.
   * @param callback The callback
   */
  resolve(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, query: string, callback: msRest.ServiceCallback<Models.LuisResult>): void;
  /**
   * @param azureRegion Supported Azure regions for Cognitive Services endpoints. Possible values
   * include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus', 'westus2',
   * 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth',
   * 'virginia'
   * @param azureCloud Supported Azure Clouds for Cognitive Services endpoints. Possible values
   * include: 'com', 'us'
   * @param appId The LUIS application ID (Guid).
   * @param query The utterance to predict.
   * @param options The optional parameters
   * @param callback The callback
   */
  resolve(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, query: string, options: Models.PredictionResolveOptionalParams, callback: msRest.ServiceCallback<Models.LuisResult>): void;
  resolve(azureRegion: Models.AzureRegions, azureCloud: Models.AzureClouds, appId: string, query: string, options?: Models.PredictionResolveOptionalParams | msRest.ServiceCallback<Models.LuisResult>, callback?: msRest.ServiceCallback<Models.LuisResult>): Promise<Models.PredictionResolveResponse> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        azureCloud,
        appId,
        query,
        options
      },
      resolveOperationSpec,
      callback) as Promise<Models.PredictionResolveResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const resolveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.azureCloud,
    Parameters.appId
  ],
  queryParameters: [
    Parameters.timezoneOffset,
    Parameters.verbose,
    Parameters.staging,
    Parameters.spellCheck,
    Parameters.bingSpellCheckSubscriptionKey,
    Parameters.log
  ],
  requestBody: {
    parameterPath: "query",
    mapper: {
      required: true,
      serializedName: "query",
      constraints: {
        MaxLength: 500
      },
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LuisResult
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};
