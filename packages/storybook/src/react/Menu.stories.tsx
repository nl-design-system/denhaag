import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuButton, MenuButtonExpandable } from '@gemeente-denhaag/menu';
import readme from '../../../../components/Menu/README.md';

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
    chromatic: { viewports: [1768, 1280, 768, 360] },
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
