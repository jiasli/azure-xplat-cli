// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f094fd2d-bce8-4234-b41d-b7a59f0cb777"',
  'x-ms-request-id': '857ad459-b033-43af-be3b-163af9ddf32e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': '821e98c7-9b15-4682-83fb-fcb79d2c2899',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091857Z:821e98c7-9b15-4682-83fb-fcb79d2c2899',
  date: 'Mon, 27 Apr 2015 09:18:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"xplatTestLbProbe\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/probes/xplatTestLbProbe\",\r\n        \"etag\": \"W/\\\"f094fd2d-bce8-4234-b41d-b7a59f0cb777\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 66,\r\n          \"intervalInSeconds\": 10,\r\n          \"numberOfProbes\": 3\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1624',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f094fd2d-bce8-4234-b41d-b7a59f0cb777"',
  'x-ms-request-id': '857ad459-b033-43af-be3b-163af9ddf32e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': '821e98c7-9b15-4682-83fb-fcb79d2c2899',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091857Z:821e98c7-9b15-4682-83fb-fcb79d2c2899',
  date: 'Mon, 27 Apr 2015 09:18:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"64002719-0f1a-44b4-9513-1a934d1d5ceb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"64002719-0f1a-44b4-9513-1a934d1d5ceb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1086',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '12e9d510-9c78-491b-a7f4-2204c624e3f3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12e9d510-9c78-491b-a7f4-2204c624e3f3?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': 'ef11803f-1c2e-4559-97f7-ac23939a6ac3',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091858Z:ef11803f-1c2e-4559-97f7-ac23939a6ac3',
  date: 'Mon, 27 Apr 2015 09:18:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbProbe\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe\",\r\n  \"etag\": \"W/\\\"64002719-0f1a-44b4-9513-1a934d1d5ceb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/loadBalancers/xplattestlbLbProbe/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"64002719-0f1a-44b4-9513-1a934d1d5ceb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbProbe/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbProbe\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1086',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '12e9d510-9c78-491b-a7f4-2204c624e3f3',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12e9d510-9c78-491b-a7f4-2204c624e3f3?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': 'ef11803f-1c2e-4559-97f7-ac23939a6ac3',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091858Z:ef11803f-1c2e-4559-97f7-ac23939a6ac3',
  date: 'Mon, 27 Apr 2015 09:18:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12e9d510-9c78-491b-a7f4-2204c624e3f3?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6246fe36-027a-4652-8e52-13f347f2ac8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31951',
  'x-ms-correlation-request-id': '4f968af4-a851-406a-9605-e76d301ab504',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091900Z:4f968af4-a851-406a-9605-e76d301ab504',
  date: 'Mon, 27 Apr 2015 09:18:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/12e9d510-9c78-491b-a7f4-2204c624e3f3?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6246fe36-027a-4652-8e52-13f347f2ac8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31951',
  'x-ms-correlation-request-id': '4f968af4-a851-406a-9605-e76d301ab504',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091900Z:4f968af4-a851-406a-9605-e76d301ab504',
  date: 'Mon, 27 Apr 2015 09:18:59 GMT',
  connection: 'close' });
 return result; }]];