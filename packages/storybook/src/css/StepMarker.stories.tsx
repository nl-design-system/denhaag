import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AlertTriangleIcon, CheckedIcon, CloseIcon } from '@gemeente-denhaag/icons';
import { StepMarker } from '@gemeente-denhaag/step-marker';
import readme from '../../../../components/StepMarker/README.md?raw';

const exampleArgs = {
  children: 1,
  appearance: 'not-checked',
  nested: false,
};

const meta = {
  id: 'css-process-steps-step-marker',
  title: 'CSS/Process Steps/StepMarker',
  component: StepMarker,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof StepMarker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Nested: Story = {
  args: { ...Default.args, appearance: 'not-checked', nested: true },
};

export const Checked: Story = {
  args: { ...Default.args, appearance: 'checked', children: <CheckedIcon /> },
};

export const CheckedNested: Story = {
  args: { ...Default.args, appearance: 'checked', children: <CheckedIcon />, nested: true },
};

export const Current: Story = {
  args: { ...Default.args, appearance: 'current' },
};

export const CurrentNested: Story = {
  args: { ...Default.args, appearance: 'current', nested: true },
};

export const Disabled: Story = {
  args: { ...Default.args, appearance: 'disabled' },
};

export const DisabledNested: Story = {
  args: { ...Default.args, appearance: 'disabled', nested: true },
};

export const Warning: Story = {
  args: { ...Default.args, appearance: 'warning', children: <AlertTriangleIcon style={{ marginTop: '-2px' }} /> },
};

export const WarningNested: Story = {
  args: {
    ...Default.args,
    appearance: 'warning',
    nested: true,
  },
};

export const Error: Story = {
  args: { ...Default.args, appearance: 'error', children: <CloseIcon /> },
};

export const ErrorNested: Story = {
  args: { ...Default.args, appearance: 'error', children: <CloseIcon />, nested: true },
};
