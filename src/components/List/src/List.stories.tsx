import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HouseIcon, TrashIcon } from '@gemeente-denhaag/icons';
import List, { ListProps, ListItem, ListSubheader } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Data Display/List',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: List,
} as Meta;

const Template: Story<ListProps> = (args: ListProps) => (
  <List {...args}>
    <ListItem primaryText="ListItem" />
    <ListItem
      primaryText="Single-line item"
      actionType="action"
      leftIcon={<HouseIcon color="inherit"></HouseIcon>}
      rightIcon={<TrashIcon />}
    />
    <ListItem
      primaryText="Single-line item"
      secondaryText="Secondary text"
      leftIcon={<HouseIcon color="inherit" />}
      actionType="nav"
    />
  </List>
);

// language=JS
const listWithIconsCode = `
<List subheader={<ListSubheader>Subheader</ListSubheader>}>
  <ListItem primaryText="ListItem" />
  <ListItem
    primaryText="Single-line item"
    actionType="action"
    leftIcon={<HouseIcon color="inherit"></HouseIcon>}
    rightIcon={<TrashIcon />}
  />
  <ListItem
    primaryText="Single-line item"
    secondaryText="Secondary text"
    leftIcon={<HouseIcon color="inherit" />}
    actionType="nav"
  />
</List>
`;

/**
 * List with icons list
 */
export const ListWithIcons = Template.bind({});
ListWithIcons.args = {
  subheader: <ListSubheader>Subheader</ListSubheader>,
};
ListWithIcons.parameters = {
  docs: {
    source: {
      // language=HTML
      code: listWithIconsCode,
    },
  },
};

const SimpleListTemplate: Story<ListProps> = (args: ListProps) => (
  <List {...args}>
    <ListItem primaryText="ListItem" />
    <ListItem primaryText="ListItem" />
    <ListItem primaryText="ListItem" />
  </List>
);

// language=JS
const simpleListCode = `
<List subheader={<ListSubheader>Subheader</ListSubheader>}>
  <ListItem primaryText="ListItem" />
  <ListItem primaryText="ListItem" />
  <ListItem primaryText="ListItem" />
</List>
`;

/**
 * Simple list
 */
export const SimpleList = SimpleListTemplate.bind({});
SimpleList.args = {
  subheader: <ListSubheader>Subheader</ListSubheader>,
};
SimpleList.parameters = {
  docs: {
    source: {
      // language=HTML
      code: simpleListCode,
    },
  },
};
