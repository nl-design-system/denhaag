import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Menu, MenuButton, MenuButtonExpandable } from '@gemeente-denhaag/menu';
import readme from '../../../../components/Menu/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/Menu/package.json';

const exampleArgs = {
  children: (
    <>
      <MenuButton href="#">Label</MenuButton>
      <MenuButtonExpandable>Label 2</MenuButtonExpandable>
    </>
  ),
};

const meta = {
  component: Menu,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
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
