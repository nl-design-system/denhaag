import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Menu, MenuButton, MenuButtonExpandable } from '@gemeente-denhaag/menu';
import readme from '../../../../components/Menu/README.md?raw';

const exampleArgs = {
  children: (
    <>
      <MenuButton href="#">Label</MenuButton>
      <MenuButtonExpandable>Label 2</MenuButtonExpandable>
    </>
  ),
};

const meta = {
  id: 'react-navigation-menu',
  title: 'React/Navigation/Menu',
  component: Menu,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <MenuButton href="#" active>
          Label
        </MenuButton>
        <MenuButtonExpandable active>Label 2</MenuButtonExpandable>
      </>
    ),
  },
};
