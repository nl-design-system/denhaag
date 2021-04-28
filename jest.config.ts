// https://jestjs.io/docs/configuration

import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['./enzyme.setup.js']
};
export default config;

