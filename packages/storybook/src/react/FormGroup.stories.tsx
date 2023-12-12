import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from '@gemeente-denhaag/formgroup';
import TextField from '@gemeente-denhaag/textfield';
import readme from '../../../../components/FormGroup/README.md';

const exampleArgs = {
  label: 'Label',
  helperText: 'Helper text',
  children: <TextField id={'textfield'} aria-describedby={'description'} placeholder={'Placeholder'} />,
};

const meta = {
  id: 'react-input-form-group',
  title: 'React/Input/Form Group',
  component: FormGroup,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
    children: (
      <TextField id={'textfield'} aria-describedby={'description'} placeholder={'Placeholder'} invalid={true} />
    ),
  },
};
