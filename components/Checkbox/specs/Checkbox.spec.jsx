import * as React from 'react';
import Checkbox from '../dist';
import { HideIcon } from '../../Icons';

describe(`Checkbox tests`, () => {
  it('can be clicked', () => {
    const props = {
      onChange: () => {
        console.log('Changed');
      },
    };

    const spy = cy.spy(props, 'onChange').as('Input Change');

    cy.mount(<Checkbox onChange={props.onChange}></Checkbox>);

    cy.get('.denhaag-checkbox')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);

    cy.get('.denhaag-checkbox__input').should('be.checked');
    cy.get('.denhaag-checkbox').click();
    cy.get('.denhaag-checkbox__input').should('not.be.checked');
  });

  it('can be disabled', () => {
    cy.mount(<Checkbox disabled></Checkbox>);

    cy.get('.denhaag-checkbox__input').should('have.attr', 'disabled');
  });

  it('can be operated by keyboard', () => {
    cy.mount(<Checkbox></Checkbox>);

    cy.get('.denhaag-checkbox__input').type(' ').should('be.checked');
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <Checkbox
        onChange={() => {
          console.log('Checkbox action');
        }}
      />,
      {
        error: true,
        checked: true,
        disabled: true,
        uncheckedIcon: <HideIcon />,
      },
      {
        selector: '.denhaag-checkbox',
        states: {
          hover: 'denhaag-checkbox--hover',
          focus: 'denhaag-checkbox--focus',
        },
      },
      [{ id: 'label', logDisabled: true }],
    );
  });
});
