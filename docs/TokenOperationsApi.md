# HiZoneAuthenticationV2Api.TokenOperationsApi

All URIs are relative to *http://api.ibeenhi.com/hi-zone-api/authentication-v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decode**](TokenOperationsApi.md#decode) | **POST** /token/decode | 
[**invalidate**](TokenOperationsApi.md#invalidate) | **POST** /token/invalidate | 
[**me**](TokenOperationsApi.md#me) | **POST** /token/me | 
[**refreshTokens**](TokenOperationsApi.md#refreshTokens) | **POST** /token/refresh | 



## decode

> DecodeTokenResponse decode(decodeTokenRequest)



Decode a token

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.TokenOperationsApi();
let decodeTokenRequest = new HiZoneAuthenticationV2Api.DecodeTokenRequest(); // DecodeTokenRequest | 
apiInstance.decode(decodeTokenRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decodeTokenRequest** | [**DecodeTokenRequest**](DecodeTokenRequest.md)|  | 

### Return type

[**DecodeTokenResponse**](DecodeTokenResponse.md)

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invalidate

> Object invalidate(invalidateTokensRequest)



Invalidate a token

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.TokenOperationsApi();
let invalidateTokensRequest = new HiZoneAuthenticationV2Api.InvalidateTokensRequest(); // InvalidateTokensRequest | 
apiInstance.invalidate(invalidateTokensRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invalidateTokensRequest** | [**InvalidateTokensRequest**](InvalidateTokensRequest.md)|  | 

### Return type

**Object**

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## me

> MeTokenResponse me()



Get user details from cookie access token

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.TokenOperationsApi();
apiInstance.me((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**MeTokenResponse**](MeTokenResponse.md)

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshTokens

> RefreshTokensResponse refreshTokens(opts)



Get new access token with refresh token

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.TokenOperationsApi();
let opts = {
  'refreshTokensRequest': new HiZoneAuthenticationV2Api.RefreshTokensRequest() // RefreshTokensRequest | 
};
apiInstance.refreshTokens(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshTokensRequest** | [**RefreshTokensRequest**](RefreshTokensRequest.md)|  | [optional] 

### Return type

[**RefreshTokensResponse**](RefreshTokensResponse.md)

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

