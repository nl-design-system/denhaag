/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.testingType === 'component') {
    require('@cypress/react/plugins/react-scripts')(on, config);
  }

  const fs = require('fs');

  const { initPlugin } = require('cypress-plugin-snapshots/plugin');
  initPlugin(on, config);

  on('task', {
    a11yLog(violations) {
      console.log(
        `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
          violations.length === 1 ? 'was' : 'were'
        } detected`,
      );

      const violationData = violations.map(({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length,
      }));

      console.table(violationData);
      return null;
    },
    log(message) {
      console.log(message);
      return null;
    },
    warn(message) {
      console.warn(message);
      return null;
    },
    error(message) {
      console.error(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    },
    checkImagesFolder({ name, nameOverride }) {
      if (!fs.existsSync(`test_images/${nameOverride || name}`)) {
        fs.mkdirSync(`test_images/${nameOverride || name}`, { recursive: true });
        fs.symlinkSync(
          `../../../../test_images/${nameOverride || name}`,
          `src/components/${nameOverride || name}/specs/__image_snapshots__`,
          'dir',
        );
      }
      return null;
    }
  });

  return config;
};
