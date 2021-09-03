import * as React from 'react';
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
    <div
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
      extraProps[key] = propValue;
      children.push(
        <div
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

Cypress.Commands.add('snapshots', (Component, props, extraClasses) => {
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
