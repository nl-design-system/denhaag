import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@gemeente-denhaag/textfield';
import { CallIcon } from '@gemeente-denhaag/icons';
import readme from '../../../../components/TextField/README.md';

const exampleArgs = {
  placeholder: 'Placeholder',
};

const meta = {
  id: 'react-input-textfield',
  title: 'React/Input/Textfield',
  component: TextField,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};

export const WithIcon: Story = {
  args: { ...Default.args, placeholder: 'Phone number', icon: <CallIcon /> },
};
