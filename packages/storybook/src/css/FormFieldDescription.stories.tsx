import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/FormFieldDescription/README.md';
import FormFieldDescription, { FormFieldDescriptionProps } from '@gemeente-denhaag/form-field-description';
import { Paragraph } from '@utrecht/component-library-react';

const meta = {
  title: 'CSS/Input/Form field description',
  id: 'css-form-field-description',
  component: FormFieldDescription,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormFieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { children: <Paragraph>Your password must contain at least 16 characters.</Paragraph> },
};

export const Invalid: Story = {
  args: { invalid: true, children: <Paragraph>This is a required field and must not be left empty.</Paragraph> },
};

export const Valid: Story = {
  args: { valid: true, children: <Paragraph>This is very safe password!</Paragraph> },
};
