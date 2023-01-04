# HiZoneAuthenticationV2Api.UserOperationsApi

All URIs are relative to *http://api.ibeenhi.com/hi-zone-api/authentication-v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRole**](UserOperationsApi.md#addRole) | **POST** /user/role | 
[**login**](UserOperationsApi.md#login) | **POST** /user/login | 
[**register**](UserOperationsApi.md#register) | **POST** /user/register | 



## addRole

> AddRoleResponse addRole(addRoleRequest)



Add a role using role secret

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.UserOperationsApi();
let addRoleRequest = new HiZoneAuthenticationV2Api.AddRoleRequest(); // AddRoleRequest | 
apiInstance.addRole(addRoleRequest, (error, data, response) => {
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
 **addRoleRequest** | [**AddRoleRequest**](AddRoleRequest.md)|  | 

### Return type

[**AddRoleResponse**](AddRoleResponse.md)

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## login

> UserLoginResponse login(userLoginRequest)



Login using username and passowrd

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.UserOperationsApi();
let userLoginRequest = new HiZoneAuthenticationV2Api.UserLoginRequest(); // UserLoginRequest | 
apiInstance.login(userLoginRequest, (error, data, response) => {
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
 **userLoginRequest** | [**UserLoginRequest**](UserLoginRequest.md)|  | 

### Return type

[**UserLoginResponse**](UserLoginResponse.md)

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## register

> UserRegisterResponse register(userRegisterRequest)



Register with username, password and email

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';
let defaultClient = HiZoneAuthenticationV2Api.ApiClient.instance;
// Configure Bearer access token for authorization: hi-zone-authentication-v2
let hi-zone-authentication-v2 = defaultClient.authentications['hi-zone-authentication-v2'];
hi-zone-authentication-v2.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HiZoneAuthenticationV2Api.UserOperationsApi();
let userRegisterRequest = new HiZoneAuthenticationV2Api.UserRegisterRequest(); // UserRegisterRequest | 
apiInstance.register(userRegisterRequest, (error, data, response) => {
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
 **userRegisterRequest** | [**UserRegisterRequest**](UserRegisterRequest.md)|  | 

### Return type

[**UserRegisterResponse**](UserRegisterResponse.md)

### Authorization

[hi-zone-authentication-v2](../README.md#hi-zone-authentication-v2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

