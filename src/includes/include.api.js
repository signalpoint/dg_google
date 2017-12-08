/**
 * Given a Google API name, this will return the api key for it from the settings.js file.
 * @param api {String} The api name, e.g. "maps", "firebase"
 * @param platform {String} Optional, defaults to current platform. Available platforms: web, android, ios
 * @returns {String|null}
 */
dg_google.apiKey = function(api, platform) {
  var key = null;
  var config = dg_google.apiConfig(api);
  if (!config) { console.log('Missing config for ' + api); }
  else {
    if (!platform) { platform = dg.platform(); } // Grab the default platform.
    if (!config.apiKey || !config.apiKey[platform]) {
      console.log('Missing apiKey for ' + api + '(' + platform + ')');
    }
    else { key = config.apiKey[platform]; } // Found the api key.
  }
  //console.log('apiKey', key);
  return key;
  //var key = null;
  //var msg = null;
  //var settings = dg.settings.dg_google;
  //if (!settings) { msg = 'dg_google'; } // Missing dg_google settings.
  //else {
  //  var config = settings[api];
  //  if (!config) { msg = api; } // Missing settings for "api" in dg_google settings.
  //  else {
  //    if (!platform) { platform = dg.platform(); }
  //    if (!config.apiKey || !config.apiKey[platform]) { // Missing api key for platform.
  //      msg = api + ' ' + platform + ' apiKey';
  //    }
  //    else { key = config.apiKey[platform]; } // Found the api key.
  //  }
  //}
  //if (msg) { console.log(msg + '  config missing, check settings.js'); } // Report any error messages.
  //return key;
};

dg_google.getConfig = function(api, name) {
  var apiConfig = dg_google.apiConfig(api);
  return apiConfig ? apiConfig[name] : null;
};

/**
 * Given a Google API name, this returns it's JSON config object from the settings.js file.
 * @param api {String} The name of the API, e.g. 'maps', or 'firebase', etc.
 * @returns {Object|null}
 */
dg_google.apiConfig = function(api) {
  var config = null;
  var msg = null;
  var settings = dg.settings.dg_google;
  if (!settings) { console.log('Missing dg_google config.'); }
  else { config = settings[api]; }
  return config;
};
