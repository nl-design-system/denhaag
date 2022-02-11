import * as React from 'react';
import IconButton from '../dist';
import { TrashIcon } from '../../Icons';

describe('IconButton tests', () => {
  // Starting with functionality tests
  it('can be clicked', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    cy.mount(
      <IconButton aria-label="Button" onClick={props.onClick}>
        <TrashIcon />
      </IconButton>,
    );

    cy.get('.denhaag-icon-button')
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
      <IconButton onClick={props.onClick} disabled>
        <TrashIcon />
      </IconButton>,
    );

    cy.get('.denhaag-icon-button')
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

    cy.mount(
      <IconButton aria-label="Button" onClick={props.onClick}>
        <TrashIcon />
      </IconButton>,
    );

    cy.get('.denhaag-icon-button')
      .type('{enter}')
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <IconButton
        onClick={() => {
          console.log('Click');
        }}
        aria-label="Button"
      >
        <TrashIcon />
      </IconButton>,
      {
        disabled: true,
      },
      {
        selector: '.denhaag-icon-button',
        states: {
          hover: 'denhaag-icon-button--hover',
          focus: 'denhaag-icon-button--focus',
        },
      },
    );
  });
});
