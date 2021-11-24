import * as React from 'react';
import Button from '../src';
import { ChevronRightIcon } from '../../Icons';

describe('Button tests', () => {
  // Starting with functionality tests
  it('can be clicked', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    cy.mount(<Button onClick={props.onClick}>Test button</Button>);

    cy.get('.denhaag-button')
      .contains('Test button')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it('cannot be clicked when disabled', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    cy.mount(
      <Button onClick={props.onClick} disabled>
        Test button
      </Button>,
    );

    cy.get('.denhaag-button')
      .click({ force: true })
      .then(() => expect(spy).to.not.have.been.called);
  });

  it('can be operated with keyboard', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    cy.mount(<Button onClick={props.onClick}>Test button</Button>);

    cy.get('.denhaag-button')
      .type('{enter}')
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <Button startIcon={<ChevronRightIcon />} endIcon={<ChevronRightIcon />}>
        Test button
      </Button>,
      {
        variant: 'secondary-action',
        size: 'large',
        disabled: true,
      },
      {
        selector: '.denhaag-button',
        states: {
          hover: 'denhaag-button--hover',
          focus: 'denhaag-button--focus',
        },
      },
    );
  });
});
