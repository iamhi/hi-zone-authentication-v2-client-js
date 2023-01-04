/**
 * Hi-Zone Authentication-v2 api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DecodeTokenRequest from '../model/DecodeTokenRequest';
import DecodeTokenResponse from '../model/DecodeTokenResponse';
import InvalidateTokensRequest from '../model/InvalidateTokensRequest';
import RefreshTokensRequest from '../model/RefreshTokensRequest';
import RefreshTokensResponse from '../model/RefreshTokensResponse';

/**
* TokenOperations service.
* @module api/TokenOperationsApi
* @version v1
*/
export default class TokenOperationsApi {

    /**
    * Constructs a new TokenOperationsApi. 
    * @alias module:api/TokenOperationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the decode operation.
     * @callback module:api/TokenOperationsApi~decodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecodeTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decode a token
     * @param {module:model/DecodeTokenRequest} decodeTokenRequest 
     * @param {module:api/TokenOperationsApi~decodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DecodeTokenResponse}
     */
    decode(decodeTokenRequest, callback) {
      let postBody = decodeTokenRequest;
      // verify the required parameter 'decodeTokenRequest' is set
      if (decodeTokenRequest === undefined || decodeTokenRequest === null) {
        throw new Error("Missing the required parameter 'decodeTokenRequest' when calling decode");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['hi-zone-authentication-v2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DecodeTokenResponse;
      return this.apiClient.callApi(
        '/token/decode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the invalidate operation.
     * @callback module:api/TokenOperationsApi~invalidateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invalidate a token
     * @param {module:model/InvalidateTokensRequest} invalidateTokensRequest 
     * @param {module:api/TokenOperationsApi~invalidateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    invalidate(invalidateTokensRequest, callback) {
      let postBody = invalidateTokensRequest;
      // verify the required parameter 'invalidateTokensRequest' is set
      if (invalidateTokensRequest === undefined || invalidateTokensRequest === null) {
        throw new Error("Missing the required parameter 'invalidateTokensRequest' when calling invalidate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['hi-zone-authentication-v2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/token/invalidate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshTokens operation.
     * @callback module:api/TokenOperationsApi~refreshTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RefreshTokensResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get new access token with refresh token
     * @param {module:model/RefreshTokensRequest} refreshTokensRequest 
     * @param {module:api/TokenOperationsApi~refreshTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RefreshTokensResponse}
     */
    refreshTokens(refreshTokensRequest, callback) {
      let postBody = refreshTokensRequest;
      // verify the required parameter 'refreshTokensRequest' is set
      if (refreshTokensRequest === undefined || refreshTokensRequest === null) {
        throw new Error("Missing the required parameter 'refreshTokensRequest' when calling refreshTokens");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['hi-zone-authentication-v2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RefreshTokensResponse;
      return this.apiClient.callApi(
        '/token/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}