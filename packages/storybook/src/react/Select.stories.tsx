import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from '@gemeente-denhaag/select';
import readme from '../../../../components/Select/README.md?raw';

const meta = {
  title: 'React/Input/Select',
  id: 'react-select',
  component: Select,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <SelectOption value="">Select an option</SelectOption>
        <SelectOption value="1">Option #1</SelectOption>
        <SelectOption value="2">Option #2</SelectOption>
        <SelectOption value="3">Option #3</SelectOption>
        <SelectOption value="4">Option #4</SelectOption>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Disabled: Story = { args: { ...Default.args, disabled: true } };
export const Required: Story = { args: { ...Default.args, required: true } };
export const RequiredServerSideRendering: Story = { args: { ...Default.args, required: true, noscript: true } };
export const Invalid: Story = { args: { ...Default.args, invalid: true } };
export const Focus: Story = { args: { ...Default.args, className: 'utrecht-select--focus' } };
export const FocusVisible: Story = {
  args: { ...Default.args, className: 'utrecht-select--focus utrecht-select--focus-visible' },
};
export const Hover: Story = { args: { ...Default.args, className: 'utrecht-select--hover' } };
