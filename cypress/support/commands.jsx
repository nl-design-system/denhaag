import * as React from 'react';
import { mount as cypressMount } from '@cypress/react';
import StylesProvider from '../../components/StylesProvider/src/index';
import '@gemeente-denhaag/design-tokens-common/dist/index';
import '@gemeente-denhaag/design-tokens-components/dist/index';
import '@gemeente-denhaag/design-tokens-proprietary/dist/index';
import pkg from '../../package.json';

Cypress.Commands.add('mount', (children) => {
  return cypressMount(<StylesProvider>{children}</StylesProvider>);
});

Cypress.Commands.add('multimount', (Component, props) => {
  let children = [];

  children.push(
    <div
      key="original"
      style={{
        /* stylelint-disable-next-line property-disallowed-list */
        padding: 10,
      }}
    >
      <Component.type {...Component.props} />
    </div>,
  );

  Object.keys(props).forEach((key) => {
    const prop = Array.isArray(props[key]) ? props[key] : [props[key]];
    prop.forEach((propValue) => {
      let extraProps = {};
      if (key === '_COMBINED') {
        Object.keys(propValue).forEach((combinedKey) => {
          extraProps[combinedKey] = propValue[combinedKey];
        });
      } else {
        extraProps[key] = propValue;
      }
      children.push(
        <div
          key={`${key}-${propValue}`}
          style={{
            /* stylelint-disable-next-line property-disallowed-list */
            padding: 10,
          }}
        >
          <Component.type {...extraProps} {...Component.props} />
        </div>,
      );
    });
  });

  return cypressMount(
    <StylesProvider>
      <div id="wrapper" style={{ display: 'inline-block' }}>
        {children}
      </div>
    </StylesProvider>,
  );
});

Cypress.Commands.add(
  'snapshots',
  (Component, props, extraClasses, knownIssues = [], nameOverride, postMountFunction = () => {}) => {
    if (Cypress.env('CICD')) {
      cy.task('checkImagesFolder', { name: Component.type.name, nameOverride: nameOverride });
    }

    if (extraClasses && Cypress.env('CICD')) {
      const extraClassesArray = Array.isArray(extraClasses) ? extraClasses : [extraClasses];
      extraClassesArray.forEach((e) => {
        if (e.states && e.selector) {
          Object.keys(e.states).forEach((state) => {
            cy.multimount(Component, props);
            cy.get(e.selector).invoke('addClass', e.states[state]);
            cy.get('#wrapper').toMatchImageSnapshot({
              name: `${nameOverride || Component.type.name}--${state}`,
            });
          });
        }
      });
    }

    cy.multimount(Component, props);
    postMountFunction();

    cy.get('#wrapper').toMatchSnapshot();

    if (Cypress.env('CICD')) {
      cy.get('#wrapper').toMatchImageSnapshot({ name: nameOverride || Component.type.name });
    }

    cy.injectAxe();
    cy.configureAxe({
      rules: knownIssues.map((issue) => {
        if (!issue.logDisabled) {
          cy.task(
            'warn',
            `${Cypress.env('CICD') ? '::warning::' : '\x1b[33m    ! '}Disabled "${issue.id}" rule for ${
              nameOverride || Component.type.name
            }${issue.issue ? ` : known issue (${pkg.bugs}/${issue.issue})` : ''}`,
          );
        }
        return { id: issue.id, reviewOnFail: true };
      }),
    });
    cy.checkA11y('#wrapper', null, (violations) => {
      cy.task('a11yLog', violations);
    });
  },
);
