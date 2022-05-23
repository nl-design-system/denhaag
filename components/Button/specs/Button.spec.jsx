import * as React from 'react';
import Button from '../dist/mjs';
import { DownloadIcon } from '@gemeente-denhaag/icons';

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
    // Button
    cy.snapshots(
      <Button>Test button</Button>,
      {
        variant: 'secondary-action',
        disabled: true,
        _COMBINED: {
          size: 'large',
          variant: 'secondary-action',
        },
      },
      {
        selector: '.denhaag-button',
        states: {
          hover: 'denhaag-button--hover',
          focus: 'denhaag-button--focus',
        },
      },
    );
    // Button with icons
    cy.snapshots(
      <Button icon={<DownloadIcon />}>Test button</Button>,
      {
        variant: 'secondary-action',
        iconAlign: 'end',
        _COMBINED: {
          size: 'large',
          iconAlign: 'end',
          variant: 'secondary-action',
          disabled: 'true',
        },
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
