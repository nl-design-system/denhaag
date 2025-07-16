import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { TrashIcon } from '@gemeente-denhaag/icons';

import readme from '../../../../components/IconButton/README.md?raw';

const exampleArgs = {
  ariaLabel: 'delete',
  children: <TrashIcon />,
  onClick: action('onClick'),
};

const meta = {
  id: 'react-input-icon-button',
  title: 'React/Input/Icon button',
  component: IconButton,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
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
