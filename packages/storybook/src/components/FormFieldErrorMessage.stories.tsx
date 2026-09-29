import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/FormFieldErrorMessage/README.md?raw';
import { FormFieldErrorMessage } from '@gemeente-denhaag/form-field-error-message';
import { Paragraph } from '@gemeente-denhaag/paragraph';

const exampleArgs = {
  children: <Paragraph>This is a required field and must not be left empty.</Paragraph>,
};

const meta = {
  component: FormFieldErrorMessage,
  tags: ['autodocs'],
  args: exampleArgs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=2002-525',
    },
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
