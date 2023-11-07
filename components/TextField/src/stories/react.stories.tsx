import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CallIcon } from '@gemeente-denhaag/icons';
import { TextField, TextFieldProps } from '../index';
import readme from '../../README.md?raw';

const exampleArgs: TextFieldProps = {
  placeholder: 'Placeholder',
};

const exampleArgsIcon: TextFieldProps = {
  placeholder: 'Phone number',
  icon: <CallIcon />,
};

const meta = {
  title: 'React/Input/Textfield',
  id: 'react-input-textfield',
  component: TextField,
  args: exampleArgs,
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

export const InvalidInput: Story = {
  args: { ...Default.args, invalid: true },
};

export const WithDescriptiveIcon: Story = {
  args: exampleArgsIcon,
};
