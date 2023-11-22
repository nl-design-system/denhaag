import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@utrecht/component-library-react';
import readme from '../../../../components/TextField/README.md';

const meta = {
  title: 'React/Input/Utrecht TextArea',
  id: 'react-textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder' },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};
export const Invalid: Story = {
  args: { ...Default.args, invalid: true },
};
