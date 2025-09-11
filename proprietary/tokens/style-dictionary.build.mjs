import StyleDictionary from 'style-dictionary';
import { readFile } from 'node:fs/promises';

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const sortByName = (a, b) => stringSort(a.name, b.name);

const build = async () => {
  const configData = JSON.parse(await readFile('../../style-dictionary.config.json', 'utf-8'));
  StyleDictionary.registerFormat({
    name: 'json/list',
    format: ({ dictionary }) => {
      return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
    },
  });

  await new StyleDictionary({
    ...configData,
    log: {
      verbosity: 'verbose',
    },
    source: [...configData.source, '../Common/src/**/*.tokens.json', '../Proprietary/src/**/*.tokens.json'],
    platforms: {
      ...configData.platforms,
      'json-list': {
        transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
        buildPath: 'dist/',
        files: [{ destination: 'list.json', format: 'json/list' }],
      },
    },
  }).buildAllPlatforms();
};

build();
