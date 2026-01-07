import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../../../../components/FormFieldDescription/README.md?raw';
import { FormFieldDescription } from '@gemeente-denhaag/form-field-description';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/FormFieldDescription/package.json';

const meta = {
  component: FormFieldDescription,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
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
