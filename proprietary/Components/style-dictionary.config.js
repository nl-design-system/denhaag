const config = require('../../style-dictionary.config.json');

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

module.exports = {
  ...config,
  format: {
    'json/list': function ({ dictionary }) {
      return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
    },
  },
  platforms: {
    ...config.platforms,
    'json-list': {
      transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'list.json',
          format: 'json/list',
        },
      ],
    },
  },
  source: [...config.source, '../Common/src/**/*.tokens.json', '../Proprietary/src/**/*.tokens.json'],
};
