import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@gemeente-denhaag/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@gemeente-denhaag/icons';

import readme from '../../../../components/Button/README.md?raw';

const exampleArgs = {
  children: 'Button',
};

const meta = {
  id: 'react-input-button',
  title: 'React/Input/Button',
  component: Button,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { ...Default.args, variant: 'secondary-action' },
};

export const IconLeft: Story = {
  args: { ...Default.args, icon: <ArrowLeftIcon /> },
};

export const IconRight: Story = {
  args: { ...Default.args, icon: <ArrowRightIcon />, iconAlign: 'end' },
};

export const Large: Story = {
  args: { ...Default.args, size: 'large' },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
