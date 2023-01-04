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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HiZoneAuthenticationV2Api);
  }
}(this, function(expect, HiZoneAuthenticationV2Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HiZoneAuthenticationV2Api.UserLoginRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserLoginRequest', function() {
    it('should create an instance of UserLoginRequest', function() {
      // uncomment below and update the code to test UserLoginRequest
      //var instance = new HiZoneAuthenticationV2Api.UserLoginRequest();
      //expect(instance).to.be.a(HiZoneAuthenticationV2Api.UserLoginRequest);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new HiZoneAuthenticationV2Api.UserLoginRequest();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new HiZoneAuthenticationV2Api.UserLoginRequest();
      //expect(instance).to.be();
    });

  });

}));
