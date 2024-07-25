import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HouseIcon, TrashIcon } from '@gemeente-denhaag/icons';
import { List, ListItem, ListSubheader } from '@gemeente-denhaag/list';
import readme from '../../../../components/List/README.md?raw';

const exampleArgs = {
  children: (
    <>
      <ListItem primaryText="ListItem" />
      <ListItem primaryText="ListItem" />
      <ListItem primaryText="ListItem" />
    </>
  ),
};

const meta = {
  id: 'react-data-display-list',
  title: 'React/Data Display/List',
  component: List,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Subheader: Story = {
  args: {
    subheader: <ListSubheader>Subheader</ListSubheader>,
  },
};

export const Listitem: Story = {
  args: {
    children: (
      <>
        <ListItem primaryText="ListItem" />
        <ListItem
          primaryText="Single-line item"
          actionType="action"
          leftIcon={<HouseIcon color="inherit"></HouseIcon>}
          rightIcon={<TrashIcon />}
          onClick={action('Secondary action click')}
        />
        <ListItem
          primaryText="Single-line item"
          secondaryText="Secondary text"
          leftIcon={<HouseIcon color="inherit" />}
          actionType="nav"
          onClick={action('ListItem Nav click')}
        />
      </>
    ),
  },
};
