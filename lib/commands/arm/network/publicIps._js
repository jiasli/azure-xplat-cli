/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';
var constants = require('./constants');
var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var tagUtils = require('../tag/tagUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {

  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var publicIPAddresses = network.category('public-ip')
    .description($('Commands to manage public ip addresses'));

  publicIPAddresses.command('create [resource-group] [name] [location]')
    .description($('Create a public ip address'))
    .usage('[options] <resource-group> <name> <location>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-l, --location <location>', $('the location'))
    .option('-a, --allocation-method [allocation-method]', $('the public IP allocation method.' +
      '\n     Possible values are: \'Static\' and \'Dynamic\''))
    .option('-e, --ip-version [ip-version]', $('the public IP address version. Possible' +
      '\n     values are: \'IPv4\' and \'IPv6\''))
    .option('-d, --domain-name-label [domain-name-label]', $(''))
    .option('-f, --reverse-fqdn [reverse-fqdn]', $(''))
    .option('-i, --idle-timeout [idle-timeout]', $('the idle timeout of the public IP' +
      '\n     address'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, location, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.location = cli.interaction.promptIfNotGiven($('location : '), location, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (result) {
        throw new Error(util.format($('public ip address with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.location) {
        parameters.location = options.location;
      }
      if(options.allocationMethod) {
        parameters.publicIPAllocationMethod = validation.isIn(options.allocationMethod, ['Static', 'Dynamic'], '--allocation-method');
      } else if(useDefaults) {
        parameters.publicIPAllocationMethod = 'Dynamic';
      }
      if(options.ipVersion) {
        parameters.publicIPAddressVersion = validation.isIn(options.ipVersion, ['IPv4', 'IPv6'], '--ip-version');
      } else if(useDefaults) {
        parameters.publicIPAddressVersion = 'IPv4';
      }
      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.domainNameLabel) {
        if(!utils.argHasValue(options.domainNameLabel)) {
          delete parameters.dnsSettings;
        } else {
          parameters.dnsSettings.domainNameLabel = options.domainNameLabel;
        }
      }
      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.reverseFqdn) {
        parameters.dnsSettings.reverseFqdn = options.reverseFqdn;
      }
      if(options.idleTimeout) {
        parameters.idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.idleTimeoutInMinutes = parseInt('4', 10);
      }
      if(options.tags) {
        if (utils.argHasValue(options.tags)) {
          tagUtils.appendTags(parameters, options);
        }
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });

  publicIPAddresses.command('set [resource-group] [name]')
    .description($('Update a public ip address'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-a, --allocation-method [allocation-method]', $('the public IP allocation method.' +
      '\n     Possible values are: \'Static\' and \'Dynamic\''))
    .option('-d, --domain-name-label [domain-name-label]', $(''))
    .option('-f, --reverse-fqdn [reverse-fqdn]', $(''))
    .option('-i, --idle-timeout [idle-timeout]', $('the idle timeout of the public IP' +
      '\n     address'))
    .option('-t, --tags [tags]', $(constants.help.tags.create))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('public ip address with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = result;
      if(options.allocationMethod) {
        parameters.publicIPAllocationMethod = validation.isIn(options.allocationMethod, ['Static', 'Dynamic'], '--allocation-method');
      } else if(useDefaults) {
        parameters.publicIPAllocationMethod = 'Dynamic';
      }
      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.domainNameLabel) {
        if(!utils.argHasValue(options.domainNameLabel)) {
          delete parameters.dnsSettings;
        } else {
          parameters.dnsSettings.domainNameLabel = options.domainNameLabel;
        }
      }
      if(!parameters.dnsSettings) {
        parameters.dnsSettings = {};
      }
      if(options.reverseFqdn) {
        parameters.dnsSettings.reverseFqdn = options.reverseFqdn;
      }
      if(options.idleTimeout) {
        parameters.idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.idleTimeoutInMinutes = parseInt('4', 10);
      }
      if(options.tags) {
        if (utils.argHasValue(options.tags)) {
          tagUtils.appendTags(parameters, options);
        }
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.createOrUpdate(resourceGroup, name, parameters, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });

  publicIPAddresses.command('delete [resource-group] [name]')
    .description($('Delete a public ip address'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('public ip address with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete public ip address "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('public ip address "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.deleteMethod(resourceGroup, name, _);
        cli.output.info(util.format($('public ip address "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  publicIPAddresses.command('show [resource-group] [name]')
    .description($('Show a public ip address'))
    .usage('[options] <resource-group> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-n, --name <name>', $('the name of the public ip address'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the public ip address "%s"'), name));
      try {
        result = networkManagementClient.publicIPAddresses.get(resourceGroup, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        cli.output.warn(util.format($('public ip address with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });

  publicIPAddresses.command('list [resource-group]')
    .description($('List public ip addresses'))
    .usage('[options] <resource-group>')
    .option('-g, --resource-group [resource-group]', $('the name of the resource group'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result = null;

      var progress;
      try {
        if(typeof networkManagementClient.publicIPAddresses.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          progress = cli.interaction.progress($('Getting the public ip addresses'));
          result = networkManagementClient.publicIPAddresses.list(resourceGroup,  _);
        } else {
          if(options.resourceGroup) {
            progress = cli.interaction.progress($('Getting the public ip addresses'));
            result = networkManagementClient.publicIPAddresses.list(resourceGroup,  _);
          } else {
            progress = cli.interaction.progress($('Getting the public ip addresses'));
            result = networkManagementClient.publicIPAddresses.listAll(_);
          }
        }
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, function(result) {
        if (result.length === 0) {
          cli.output.warn($('No public ip addresses found'));
        } else {
          cli.output.table(result, function (row, item) {
            row.cell($('Name'), item.name);
            row.cell($('Location'), item.location || '');
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });


};
