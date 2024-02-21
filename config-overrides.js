// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add your customizations here
  config.resolve.alias['@'] = path.resolve(__dirname, 'src');

  return config;
};