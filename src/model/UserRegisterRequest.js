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

import ApiClient from '../ApiClient';

/**
 * The UserRegisterRequest model module.
 * @module model/UserRegisterRequest
 * @version v1
 */
class UserRegisterRequest {
    /**
     * Constructs a new <code>UserRegisterRequest</code>.
     * Register with username, password and email
     * @alias module:model/UserRegisterRequest
     * @param username {String} 
     * @param password {String} 
     * @param email {String} 
     */
    constructor(username, password, email) { 
        
        UserRegisterRequest.initialize(this, username, password, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password, email) { 
        obj['username'] = username;
        obj['password'] = password;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>UserRegisterRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserRegisterRequest} obj Optional instance to populate.
     * @return {module:model/UserRegisterRequest} The populated <code>UserRegisterRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserRegisterRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserRegisterRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserRegisterRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserRegisterRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}

UserRegisterRequest.RequiredProperties = ["username", "password", "email"];

/**
 * @member {String} username
 */
UserRegisterRequest.prototype['username'] = undefined;

/**
 * @member {String} password
 */
UserRegisterRequest.prototype['password'] = undefined;

/**
 * @member {String} email
 */
UserRegisterRequest.prototype['email'] = undefined;






export default UserRegisterRequest;

