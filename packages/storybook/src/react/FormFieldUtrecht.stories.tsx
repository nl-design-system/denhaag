import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  FormField,
  FormFieldProps,
  FormLabel,
  FormLabelProps,
  FormFieldDescription,
  FormFieldDescriptionProps,
} from '@gemeente-denhaag/form-field-utrecht';

import readme from '../../../../components/FormField/README.md';
import { Paragraph } from '@utrecht/component-library-react';
import Textbox from '@gemeente-denhaag/textbox';

const meta = {
  id: 'react-input-form-field-utrecht',
  title: 'React/Input/Form Field Utrecht',
  component: FormField,
  args: {},
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
  render: () => (
    <FormField type="text">
      <FormLabel htmlFor="textfield-1">Label</FormLabel>
      <Paragraph className="utrecht-form-field__input">
        <Textbox id={'textfield-1'} aria-describedby={'description-1'} placeholder={'Placeholder'} />
      </Paragraph>
      <FormFieldDescription id="description-1">Description</FormFieldDescription>
    </FormField>
  ),
};

export const Error: Story = {
  render: () => (
    <FormField type="text" invalid>
      <FormLabel htmlFor="textfield-1">Label</FormLabel>
      <Paragraph className="utrecht-form-field__input">
        <Textbox id={'textfield-1'} aria-describedby={'description-1'} placeholder={'Placeholder'} invalid={true} />
      </Paragraph>
      <FormFieldDescription id="description-1">Description</FormFieldDescription>
    </FormField>
  ),
};
