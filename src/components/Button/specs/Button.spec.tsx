import * as React from 'react';
import { mount } from '@cypress/react';
import Button, { ButtonProps } from '../src/index';

function terminalLog(violations) {
  cy.task(
    'log',
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

  cy.task('table', violationData);
}

describe('Button tests', () => {
  it('can be clicked', () => {
    const props: ButtonProps = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    mount(<Button onClick={props.onClick}>Test button</Button>);

    cy.get('button')
      .contains('Test button')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it('cannot be clicked when disabled', () => {
    const props: ButtonProps = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    mount(
      <Button onClick={props.onClick} disabled>
        Test button
      </Button>,
    );

    cy.get('button')
      .click({ force: true })
      .then(() => expect(spy).to.not.have.been.called);
  });

  it('does not violate any accessibility rules', () => {
    mount(<Button>Test button</Button>);
    cy.injectAxe();
    cy.checkA11y('button', null, terminalLog);
    cy.get('button').focus();
    cy.checkA11y('button', null, terminalLog);
    cy.get('button').click();
    cy.checkA11y('button', null, terminalLog);
  });

  it('matches snapshots', () => {
    mount(
      <div id="wrapper">
        <Button>Test button</Button>
        <Button variant="primary-action">Primary button</Button>
        <Button variant="secondary-action">Secondary button</Button>
        <Button
          startIcon={
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0 24 24Z" fill="currentColor"></path>
            </svg>
          }
        >
          Icon Left Button
        </Button>
        <Button
          variant="secondary-action"
          endIcon={
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0 24 24Z" fill="currentColor"></path>
            </svg>
          }
        >
          Icon Right Button
        </Button>
        <Button size="medium">Medium button</Button>
        <Button size="large">Large button</Button>
        <Button disabled>Disabled button</Button>
      </div>,
    );

    cy.get('#wrapper').toMatchSnapshot();
  });
});
