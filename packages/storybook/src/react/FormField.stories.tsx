import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormField, FormFieldLabel, FormFieldInput, FormFieldDescription } from '@gemeente-denhaag/form-field';
import { TextField } from '@gemeente-denhaag/textfield';

import readme from '../../../../components/FormField/README.md';

const exampleArgs = {};

const meta = {
  id: 'react-input-form-field',
  title: 'React/Input/Form Field',
  component: FormField,
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
} as Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField {...args}>
      <FormFieldLabel htmlFor="textfield-1">Label</FormFieldLabel>
      <FormFieldInput>
        <TextField id={'textfield-1'} aria-describedby={'description-1'} placeholder={'Placeholder'} />
      </FormFieldInput>
      <FormFieldDescription id="description-1">Description</FormFieldDescription>
    </FormField>
  ),
};

export const Error: Story = {
  render: (args) => (
    <FormField {...args} error>
      <FormFieldLabel htmlFor="textfield-1">Label</FormFieldLabel>
      <FormFieldInput>
        <TextField id={'textfield-1'} aria-describedby={'description-1'} placeholder={'Placeholder'} invalid={true} />
      </FormFieldInput>
      <FormFieldDescription id="description-1">Description</FormFieldDescription>
    </FormField>
  ),
};
