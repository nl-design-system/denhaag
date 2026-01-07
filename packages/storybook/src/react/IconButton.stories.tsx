import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { TrashIcon } from '@gemeente-denhaag/icons';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/IconButton/package.json';

import readme from '../../../../components/IconButton/README.md?raw';

const exampleArgs = {
  ariaLabel: 'delete',
  children: <TrashIcon />,
  onClick: action('onClick'),
};

const meta = {
  component: IconButton,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
      },
    },
  },
} as Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
