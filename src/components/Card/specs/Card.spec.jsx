import * as React from 'react';
import Card from '../src/index';

const props = {
  title: 'Shrimp and Chorizo Paella',
  subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  date: new Date('2020-01-21'),
  href: '#test',
};

describe(`Card tests`, () => {
  it('can be clicked', () => {
    cy.mount(<Card {...props} />);

    cy.get('.denhaag-card').click();

    cy.location('hash').should('eq', '#test');
  });

  it('can be operated with keyboard', () => {
    cy.mount(<Card {...props} />);

    cy.get('.denhaag-card a').type('{enter}');

    cy.location('hash').should('eq', '#test');
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <Card {...props} />,
      { variant: ['case'] },
      {
        selector: '.denhaag-card',
        states: {
          hover: 'denhaag-card--hover',
          focus: 'denhaag-card--focus',
        },
      },
      [{ id: 'color-contrast', issue: 376 }],
    );
  });
});
