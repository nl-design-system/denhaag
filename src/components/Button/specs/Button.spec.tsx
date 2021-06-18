import * as React from 'react';
import { mount } from '@cypress/react';
import Button, { ButtonProps } from '../src/index';

describe('Button tests', () => {
  it('can be clicked', () => {
    const props: ButtonProps = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    mount(<Button onClick={props.onClick}>Test button</Button>);

    cy.get('.denhaag-button')
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

    cy.get('.denhaag-button')
      .click({ force: true })
      .then(() => expect(spy).to.not.have.been.called);
  });

  it('can be operated with keyboard', () => {
    const props: ButtonProps = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    mount(
      <Button onClick={props.onClick} tabIndex={-1}>
        Test button
      </Button>,
    );

    cy.get('.denhaag-button')
      .type('{enter}')
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it('does not violate any accessibility rules', () => {
    mount(<Button>Test button</Button>);
    cy.injectAxe();
    cy.checkA11y('.denhaag-button', null, (violations) => {
      cy.task('a11yLog', violations);
    });
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
