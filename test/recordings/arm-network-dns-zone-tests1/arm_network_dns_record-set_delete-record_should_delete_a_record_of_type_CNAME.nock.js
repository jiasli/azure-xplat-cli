// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-e744-55318f78d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-e744-55318f78d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b7b7c053-7dea-42f8-9399-8327bc2bc491',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'cdf08442-61a3-4d86-9870-0a72caee5f03',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111947Z:cdf08442-61a3-4d86-9870-0a72caee5f03',
  date: 'Fri, 27 Jan 2017 11:19:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-e744-55318f78d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-e744-55318f78d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b7b7c053-7dea-42f8-9399-8327bc2bc491',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'cdf08442-61a3-4d86-9870-0a72caee5f03',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111947Z:cdf08442-61a3-4d86-9870-0a72caee5f03',
  date: 'Fri, 27 Jan 2017 11:19:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cee36d43-596c-4e70-b2c8-629cd1772936\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cee36d43-596c-4e70-b2c8-629cd1772936',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f7257038-a6e1-4184-8bdc-cbae1e014e2b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6d3b7e62-8eb1-4801-b97c-2eec9d80932a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111948Z:6d3b7e62-8eb1-4801-b97c-2eec9d80932a',
  date: 'Fri, 27 Jan 2017 11:19:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"cee36d43-596c-4e70-b2c8-629cd1772936\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: 'cee36d43-596c-4e70-b2c8-629cd1772936',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f7257038-a6e1-4184-8bdc-cbae1e014e2b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '6d3b7e62-8eb1-4801-b97c-2eec9d80932a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111948Z:6d3b7e62-8eb1-4801-b97c-2eec9d80932a',
  date: 'Fri, 27 Jan 2017 11:19:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/CNAME/set-cname?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"3dde9d3f-ae47-41f7-90ed-562e68d909c2\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  etag: '3dde9d3f-ae47-41f7-90ed-562e68d909c2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '10b37d9c-fc2c-4ee4-bc11-28126fc34b26',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4c369391-a468-4d36-98e4-84e47fe51214',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111949Z:4c369391-a468-4d36-98e4-84e47fe51214',
  date: 'Fri, 27 Jan 2017 11:19:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnszones/exampledns.com/CNAME/set-cname?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"3dde9d3f-ae47-41f7-90ed-562e68d909c2\",\"properties\":{\"fqdn\":\"set-cname.exampledns.com.\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '358',
  'content-type': 'application/json; charset=utf-8',
  etag: '3dde9d3f-ae47-41f7-90ed-562e68d909c2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '10b37d9c-fc2c-4ee4-bc11-28126fc34b26',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '4c369391-a468-4d36-98e4-84e47fe51214',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111949Z:4c369391-a468-4d36-98e4-84e47fe51214',
  date: 'Fri, 27 Jan 2017 11:19:48 GMT',
  connection: 'close' });
 return result; }]];