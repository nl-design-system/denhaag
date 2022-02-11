import * as React from 'react';
import Menu, { MenuButton, MenuButtonExpandable } from '../dist';

describe('Menu tests', () => {
  // Starting with functionality tests
  it('can be clicked', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    cy.mount(<MenuButtonExpandable onClick={props.onClick}>Test button</MenuButtonExpandable>);

    cy.get('.denhaag-menu-button')
      .contains('Test button')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);

    cy.mount(<MenuButton href="#test">Test button</MenuButton>);
    cy.get('.denhaag-menu-button').contains('Test button').click();
    cy.location('hash').should('eq', '#test');
  });

  it('can be operated with keyboard', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('Button click');

    cy.mount(<MenuButtonExpandable onClick={props.onClick}>Test button</MenuButtonExpandable>);

    cy.get('.denhaag-menu-button')
      .type('{enter}')
      .then(() => expect(spy).to.have.been.calledOnce);

    cy.mount(<MenuButton href="#test">Test button</MenuButton>);
    cy.get('.denhaag-menu-button').type('{enter}');
    cy.location('hash').should('eq', '#test');
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <Menu id="menu">
        <MenuButton href="https://github.com/nl-design-system/denhaag">Label</MenuButton>
        <MenuButton href="https://github.com/nl-design-system/denhaag" active>
          Label 2
        </MenuButton>
        <MenuButtonExpandable>Label 3</MenuButtonExpandable>
        <MenuButtonExpandable active>Label 4</MenuButtonExpandable>
      </Menu>,
      {},
      {
        selector: '.denhaag-menu-button',
        states: {
          hover: 'denhaag-menu-button--hover',
          focus: 'denhaag-menu-button--focus',
        },
      },
    );
  });
});
