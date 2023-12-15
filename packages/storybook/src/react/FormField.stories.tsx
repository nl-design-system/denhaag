import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FormField from '@gemeente-denhaag/form-field';
import FormLabel from '@gemeente-denhaag/form-label';
import Textbox from '@gemeente-denhaag/textbox';
import Checkbox from '@gemeente-denhaag/checkbox';
import readme from '../../../../components/FormField/README.md';
import FormFieldDescription from '@gemeente-denhaag/form-field-description';
import FormFieldErrorMessage from '@gemeente-denhaag/form-field-error-message';

const meta = {
  id: 'react-input-form-field',
  title: 'React/Input/Form Field',
  component: FormField,
  args: {},
  tags: ['autodocs'],
  parameters: {
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
  render: () => (
    <FormField>
      <FormLabel>Username</FormLabel>
      <Textbox placeholder="Placeholder" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField>
      <FormLabel>Username</FormLabel>
      <FormFieldDescription>Vul hier uw username in</FormFieldDescription>
      <Textbox placeholder="Placeholder" />
    </FormField>
  ),
};

export const Invalid: Story = {
  render: () => (
    <FormField invalid>
      <FormLabel>Username</FormLabel>
      <FormFieldDescription>Description</FormFieldDescription>
      <Textbox placeholder="Placeholder" invalid />
      <FormFieldErrorMessage>Error message</FormFieldErrorMessage>
    </FormField>
  ),
};

export const SingleCheckbox: Story = {
  render: () => (
    <FormField>
      <FormLabel type="checkbox">
        <Checkbox name="consent" />
        Ik ga akkoord met de algemene voorwaarden
      </FormLabel>
    </FormField>
  ),
};
