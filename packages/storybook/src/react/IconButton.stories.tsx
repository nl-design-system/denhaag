import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { TrashIcon } from '@gemeente-denhaag/icons';

import readme from '../../../../components/IconButton/README.md';

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
    chromatic: { viewports: [1768, 1280, 768, 360] },
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
