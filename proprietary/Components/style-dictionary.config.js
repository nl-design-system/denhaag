const config = require('../../style-dictionary.config.json');

module.exports = {
  ...config,
  source: [...config.source, '../Common/src/**/*.tokens.json', '../Proprietary/src/**/*.tokens.json'],
};
