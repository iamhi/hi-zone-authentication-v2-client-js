# HiZoneAuthenticationV2Api.WhatIsATagApi

All URIs are relative to *http://api.ibeenhi.com/hi-zone-api/authentication-v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](WhatIsATagApi.md#ping) | **GET** /status/ping | 



## ping

> ping()



Get a ping

### Example

```javascript
import HiZoneAuthenticationV2Api from 'hi_zone_authentication_v2_api';

let apiInstance = new HiZoneAuthenticationV2Api.WhatIsATagApi();
apiInstance.ping((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

