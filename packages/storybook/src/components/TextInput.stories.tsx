import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from '@gemeente-denhaag/text-input';
import readme from '../../../../components/TextInput/README.md?raw';
import { CallIcon, SearchIcon } from '@gemeente-denhaag/icons';

const meta = {
  component: TextInput,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};

export const Date: Story = {
  args: { ...Default.args, type: 'date' },
};

export const Number: Story = {
  args: { ...Default.args, type: 'number' },
};

export const Password: Story = {
  args: { ...Default.args, type: 'password' },
};

export const WithIconEnd: Story = {
  args: { ...Default.args, iconEnd: <SearchIcon /> },
};

export const WithIconStart: Story = {
  args: { ...Default.args, iconStart: <CallIcon /> },
};
