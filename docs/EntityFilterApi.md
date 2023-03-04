# TestSoyyo.EntityFilterApi

All URIs are relative to *https://virtserver.swaggerhub.com/NEONACC/soyyo/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entitiesFilterPost**](EntityFilterApi.md#entitiesFilterPost) | **POST** /entities/filter | Filtrar listado entidades ordenadas alfabeticamente

<a name="entitiesFilterPost"></a>
# **entitiesFilterPost**
> [Entity] entitiesFilterPost(opts)

Filtrar listado entidades ordenadas alfabeticamente

Gets entities By name

### Example
```javascript
import {TestSoyyo} from 'test_soyyo';

let apiInstance = new TestSoyyo.EntityFilterApi();
let opts = { 
  'body': new TestSoyyo.Filter() // Filter | Datos de entrada
};
apiInstance.entitiesFilterPost(opts, (error, data, response) => {
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
 **body** | [**Filter**](Filter.md)| Datos de entrada | [optional] 

### Return type

[**[Entity]**](Entity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

