import * as React from 'react';
import FormControlLabel from '../src/index';
import Checkbox from '../../Checkbox';

describe(`FormControlLabel tests`, () => {
  it('can be clicked', () => {
    const props = {
      onChange: () => {
        console.log('Changed');
      },
    };

    const spy = cy.spy(props, 'onChange').as('Input Change');

    cy.mount(
      <FormControlLabel label="Checkbox" control={<Checkbox></Checkbox>} onChange={props.onChange}></FormControlLabel>,
    );

    cy.get('.denhaag-form-control-label')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);

    cy.get('.denhaag-checkbox__input').should('be.checked');
    cy.get('.denhaag-form-control-label').click();
    cy.get('.denhaag-checkbox__input').should('not.be.checked');
  });

  it('cannot be clicked when disabled', () => {
    cy.mount(<FormControlLabel label="Checkbox" control={<Checkbox></Checkbox>} disabled></FormControlLabel>);

    cy.get('.denhaag-form-control-label').click();
    cy.get('.denhaag-checkbox__input').should('not.be.checked');
    cy.get('.denhaag-checkbox__input').should('have.attr', 'disabled');
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <FormControlLabel label="Checkbox" control={<Checkbox></Checkbox>}></FormControlLabel>,
      {
        checked: true,
        disabled: true,
      },
      {
        selector: '.denhaag-form-control-label',
        states: {
          hover: 'denhaag-form-control-label--hover',
        },
      },
    );
  });
});
