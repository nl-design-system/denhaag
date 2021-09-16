import * as React from 'react';
import List, { ListItem, ListSubheader } from '../src/index';
import { HouseIcon, TrashIcon } from '../../Icons';

describe(`List tests`, () => {
  it('has clickable listitems', () => {
    const props = {
      onClick: () => {
        console.log('Clicked');
      },
    };

    const spy = cy.spy(props, 'onClick').as('List item click');

    cy.mount(
      <List>
        <ListItem primaryText="Primary text" secondaryText="Secondary text" actionType="nav" onClick={props.onClick} />
      </List>,
    );

    cy.get('.denhaag-list__item').contains('Primary text');
    cy.get('.denhaag-list__item').contains('Secondary text');
    cy.get('.denhaag-list__item')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <List subheader={<ListSubheader>subheader</ListSubheader>}>
        <ListItem primaryText="ListItem" />
        <ListItem
          primaryText="Single-line item"
          actionType="action"
          onClick={console.log('TrashIcon click')}
          leftIcon={<HouseIcon color="inherit"></HouseIcon>}
          rightIcon={<TrashIcon />}
        />
        <ListItem
          primaryText="Single-line item"
          secondaryText="Secondary text"
          onClick={console.log('ListItem click')}
          leftIcon={<HouseIcon color="inherit" />}
          actionType="nav"
        />
      </List>,
      {},
      {
        selector: '.denhaag-list__item',
        states: {
          hover: 'denhaag-list__item--hover',
          focus: 'denhaag-list__item--focus',
        },
      },
      [{ id: 'list', issue: 402 }],
    );
  });
});
