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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip5044\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044\",\r\n      \"etag\": \"W/\\\"b3affea3-90ea-4b69-a43a-c5c9044b27a6\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipAddress\": \"104.42.190.145\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 6,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip\",\r\n          \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\",\r\n          \"reverseFqdn\": \"dnstestpubip1805.westus.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    },\r\n    {\r\n      \"name\": \"armpublicipnew4966\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966\",\r\n      \"etag\": \"W/\\\"4a68a407-eab8-4224-b5dd-85d1b57a33ff\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip1805\",\r\n          \"fqdn\": \"dnstestpubip1805.westus.cloudapp.azure.com\",\r\n          \"reverseFqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1450',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ac61263f-8ffb-42d8-bba0-91f2db10c9ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31929',
  'x-ms-correlation-request-id': '1581d397-b137-4d12-8271-c507b58ea79a',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111041Z:1581d397-b137-4d12-8271-c507b58ea79a',
  date: 'Mon, 27 Apr 2015 11:10:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip5044\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5044\",\r\n      \"etag\": \"W/\\\"b3affea3-90ea-4b69-a43a-c5c9044b27a6\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipAddress\": \"104.42.190.145\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 6,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip\",\r\n          \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\",\r\n          \"reverseFqdn\": \"dnstestpubip1805.westus.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    },\r\n    {\r\n      \"name\": \"armpublicipnew4966\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966\",\r\n      \"etag\": \"W/\\\"4a68a407-eab8-4224-b5dd-85d1b57a33ff\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip1805\",\r\n          \"fqdn\": \"dnstestpubip1805.westus.cloudapp.azure.com\",\r\n          \"reverseFqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1450',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ac61263f-8ffb-42d8-bba0-91f2db10c9ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31929',
  'x-ms-correlation-request-id': '1581d397-b137-4d12-8271-c507b58ea79a',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111041Z:1581d397-b137-4d12-8271-c507b58ea79a',
  date: 'Mon, 27 Apr 2015 11:10:40 GMT',
  connection: 'close' });
 return result; }]];