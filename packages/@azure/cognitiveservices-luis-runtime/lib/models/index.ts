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


/**
 * @interface
 * An interface representing IntentModel.
 * An intent detected from the utterance.
 *
 */
export interface IntentModel {
  /**
   * @member {string} [intent] Name of the intent, as defined in LUIS.
   */
  intent?: string;
  /**
   * @member {number} [score] Associated prediction score for the intent
   * (float).
   */
  score?: number;
}

/**
 * @interface
 * An interface representing EntityModel.
 * An entity extracted from the utterance.
 *
 */
export interface EntityModel {
  /**
   * @member {string} entity Name of the entity, as defined in LUIS.
   */
  entity: string;
  /**
   * @member {string} type Type of the entity, as defined in LUIS.
   */
  type: string;
  /**
   * @member {number} startIndex The position of the first character of the
   * matched entity within the utterance.
   */
  startIndex: number;
  /**
   * @member {number} endIndex The position of the last character of the
   * matched entity within the utterance.
   */
  endIndex: number;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @interface
 * An interface representing CompositeChildModel.
 * Child entity in a LUIS Composite Entity.
 *
 */
export interface CompositeChildModel {
  /**
   * @member {string} type Type of child entity.
   */
  type: string;
  /**
   * @member {string} value Value extracted by LUIS.
   */
  value: string;
}

/**
 * @interface
 * An interface representing CompositeEntityModel.
 * LUIS Composite Entity.
 *
 */
export interface CompositeEntityModel {
  /**
   * @member {string} parentType Type/name of parent entity.
   */
  parentType: string;
  /**
   * @member {string} value Value for composite entity extracted by LUIS.
   */
  value: string;
  /**
   * @member {CompositeChildModel[]} children Child entities.
   */
  children: CompositeChildModel[];
}

/**
 * @interface
 * An interface representing Sentiment.
 * Sentiment of the input utterance.
 *
 */
export interface Sentiment {
  /**
   * @member {string} [label] The polarity of the sentiment, can be positive,
   * neutral or negative.
   */
  label?: string;
  /**
   * @member {number} [score] Score of the sentiment, ranges from 0 (most
   * negative) to 1 (most positive).
   */
  score?: number;
}

/**
 * @interface
 * An interface representing LuisResult.
 * Prediction, based on the input query, containing intent(s) and entities.
 *
 */
export interface LuisResult {
  /**
   * @member {string} [query] The input utterance that was analyzed.
   */
  query?: string;
  /**
   * @member {string} [alteredQuery] The corrected utterance (when spell
   * checking was enabled).
   */
  alteredQuery?: string;
  /**
   * @member {IntentModel} [topScoringIntent]
   */
  topScoringIntent?: IntentModel;
  /**
   * @member {IntentModel[]} [intents] All the intents (and their score) that
   * were detected from utterance.
   */
  intents?: IntentModel[];
  /**
   * @member {EntityModel[]} [entities] The entities extracted from the
   * utterance.
   */
  entities?: EntityModel[];
  /**
   * @member {CompositeEntityModel[]} [compositeEntities] The composite
   * entities extracted from the utterance.
   */
  compositeEntities?: CompositeEntityModel[];
  /**
   * @member {Sentiment} [sentimentAnalysis]
   */
  sentimentAnalysis?: Sentiment;
  /**
   * @member {LuisResult} [connectedServiceResult]
   */
  connectedServiceResult?: LuisResult;
}

/**
 * @interface
 * An interface representing EntityWithScore.
 * @extends EntityModel
 */
export interface EntityWithScore extends EntityModel {
  /**
   * @member {number} score Associated prediction score for the intent (float).
   */
  score: number;
}

/**
 * @interface
 * An interface representing EntityWithResolution.
 * @extends EntityModel
 */
export interface EntityWithResolution extends EntityModel {
  /**
   * @member {any} resolution Resolution values for pre-built LUIS entities.
   */
  resolution: any;
}

/**
 * @interface
 * An interface representing APIError.
 * Error information returned by the API
 *
 */
export interface APIError {
  /**
   * @member {string} [statusCode] HTTP Status code
   */
  statusCode?: string;
  /**
   * @member {string} [message] Cause of the error.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing PredictionResolveOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PredictionResolveOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {number} [timezoneOffset] The timezone offset for the location of
   * the request.
   */
  timezoneOffset?: number;
  /**
   * @member {boolean} [verbose] If true, return all intents instead of just
   * the top scoring intent.
   */
  verbose?: boolean;
  /**
   * @member {boolean} [staging] Use the staging endpoint slot.
   */
  staging?: boolean;
  /**
   * @member {boolean} [spellCheck] Enable spell checking.
   */
  spellCheck?: boolean;
  /**
   * @member {string} [bingSpellCheckSubscriptionKey] The subscription key to
   * use when enabling bing spell check
   */
  bingSpellCheckSubscriptionKey?: string;
  /**
   * @member {boolean} [log] Log query (default is true)
   */
  log?: boolean;
}

/**
 * Defines values for AzureRegions.
 * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
 * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast',
 * 'brazilsouth', 'virginia'
 * @readonly
 * @enum {string}
 */
export type AzureRegions = 'westus' | 'westeurope' | 'southeastasia' | 'eastus2' | 'westcentralus' | 'westus2' | 'eastus' | 'southcentralus' | 'northeurope' | 'eastasia' | 'australiaeast' | 'brazilsouth' | 'virginia';

/**
 * Defines values for AzureClouds.
 * Possible values include: 'com', 'us'
 * @readonly
 * @enum {string}
 */
export type AzureClouds = 'com' | 'us';

/**
 * Contains response data for the resolve operation.
 */
export type PredictionResolveResponse = LuisResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LuisResult;
    };
};
