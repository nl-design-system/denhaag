import StyleDictionary from 'style-dictionary';
import { readFile } from 'node:fs/promises';

const build = async () => {
  const configData = JSON.parse(await readFile('../../style-dictionary.config.json', 'utf-8'));

  await new StyleDictionary({
    ...configData,
    source: [...configData.source, '../Proprietary/src/**/*.tokens.json'],
  }).buildAllPlatforms();
};

build();
