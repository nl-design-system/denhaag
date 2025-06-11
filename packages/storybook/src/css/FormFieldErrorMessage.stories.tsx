import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/FormFieldErrorMessage/README.md?raw';
import { FormFieldErrorMessage } from '@gemeente-denhaag/form-field-error-message';
import { Paragraph } from '@gemeente-denhaag/paragraph';

const exampleArgs = {
  children: <Paragraph>This is a required field and must not be left empty.</Paragraph>,
};

const meta = {
  title: 'CSS/Input/Form field error message',
  id: 'css-form-field-error-message',
  component: FormFieldErrorMessage,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormFieldErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
