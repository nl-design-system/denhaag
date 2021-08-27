// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { mount as cypressMount } from '@cypress/react';
import StylesProvider from '../../src/components/StylesProvider/src/index';
import '../../src/styles/Common/dist/index';
import '../../src/styles/Components/dist/index';
import '../../src/styles/Proprietary/dist/index';

Cypress.Commands.add('mount', (children) => {
  return cypressMount(<StylesProvider>{children}</StylesProvider>);
});

Cypress.Commands.add('multimount', (Component, props) => {
  let children = [];

  children.push(
    <div style={{ padding: 10 }}>
      <Component.type {...Component.props} />
    </div>,
  );

  Object.keys(props).forEach((key) => {
    const prop = Array.isArray(props[key]) ? props[key] : [props[key]];
    prop.forEach((propValue) => {
      let extraProps = {};
      extraProps[key] = propValue;
      children.push(
        <div style={{ padding: 10 }}>
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

Cypress.Commands.add('snapshots', (Component, props, extraClasses ) => {
  if (extraClasses && extraClasses.selector && extraClasses.states) {
    Object.keys(extraClasses.states).forEach((state) => {
      cy.multimount(Component, props);
      cy.get(extraClasses.selector).invoke('addClass', extraClasses.states[state]);
      cy.get('#wrapper').toMatchImageSnapshot({ name: `${Component.type.name}--${state}` });
    });
  }

  cy.multimount(Component, props);

  cy.get('#wrapper').toMatchSnapshot();
  cy.get('#wrapper').toMatchImageSnapshot({ name: Component.type.name });

  cy.injectAxe();
  cy.checkA11y('#wrapper', null, (violations) => {
    cy.task('a11yLog', violations);
  });

});
