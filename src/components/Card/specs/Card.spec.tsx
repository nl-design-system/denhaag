import * as React from 'react';
import { mount } from '@cypress/react';
import Card, { CardProps } from '../src/index';

const props: CardProps = {
  title: 'Shrimp and Chorizo Paella',
  subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  date: new Date('2020-01-21'),
  href: 'https://github.com',
};

const variants: CardProps['variant'][] = ['basic', 'case'];

variants.forEach((variant) => {
  describe('Card tests', () => {
    it('can be clicked', () => {
      mount(<Card {...props} variant={variant} />);

      cy.get('.denhaag-card')
        .contains('Shrimp and Chorizo Paella')
        .contains('This impressive paella is a perfect party dish and a fun meal to cook..')
        .click();

      cy.location('host').should('eq', 'github.com');
    });

    it('does not violate any accessibility rules', () => {
      mount(<Card {...props} />);

      cy.injectAxe();
      cy.checkA11y('.denhaag-card', null, (violations) => {
        cy.task('a11yLog', violations);
      });
    });

    it('matches snapshots', () => {
      mount(
        <div id="wrapper">
          <Card {...props} />
        </div>,
      );

      cy.get('#wrapper').toMatchSnapshot();
    });
  });
});
