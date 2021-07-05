// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../style-dictionary.config.json');

module.exports = {
  ...config,
  source: [
    ...config.source,
    '../Common/src/**/*.style-dictionary.json',
    '../Proprietary/src/**/*.style-dictionary.json',
  ],
};
