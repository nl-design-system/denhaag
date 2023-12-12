import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel } from '@gemeente-denhaag/formcontrollabel';
import Checkbox from '@gemeente-denhaag/checkbox';
import { Radio as RadioComponent } from '@gemeente-denhaag/radio';
import readme from '../../../../components/FormControlLabel/README.md';

const exampleArgs = {
  label: 'Label',
  input: <Checkbox />,
};

const meta = {
  id: 'react-input-form-control-label',
  title: 'React/Input/Form Control Label',
  component: FormControlLabel,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Radio: Story = {
  args: { ...Default.args, input: <RadioComponent /> },
};
