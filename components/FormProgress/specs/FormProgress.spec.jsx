import * as React from 'react';
import FormProgress from '../dist/mjs';

describe('FormProgress tests', () => {
  // Starting with functionality tests
  it('does not show back button in first step', () => {
    cy.mount(<FormProgress value={1} max={4} label="Stap 1 van 4" />);

    cy.get('.denhaag-form-progress').should('not.contain', 'Vorige stap');
  });

  it('does not show back button in first step', () => {
    cy.mount(<FormProgress value={2} max={4} label="Stap 2 van 4" />);

    cy.get('.denhaag-form-progress').should('contain', 'Vorige stap');
  });

  it('a11y and snapshots', () => {
    cy.snapshots(<FormProgress value={2} max={4} label="Stap 2 van 4" />, {}, [], [], null, () => {
      cy.get('#wrapper').invoke('css', 'width', '400px');
    });
  });
});
