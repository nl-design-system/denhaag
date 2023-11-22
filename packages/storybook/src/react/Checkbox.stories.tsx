import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Checkbox } from '@gemeente-denhaag/checkbox';
import { FormControlLabel } from '@gemeente-denhaag/formcontrollabel';
import { FormFieldInput, FormFieldGroup, FormFieldGroupLabel } from '@gemeente-denhaag/form-field';

import readme from '../../../../components/Checkbox/README.md';

const exampleArgs = {
  id: 'checkbox-1',
  name: 'checkbox',
  value: 'check',
  onChange: action('Checkbox action'),
};

const meta = {
  id: 'react-input-checkbox',
  title: 'React/Input/Checkbox',
  component: Checkbox,
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
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { ...Default.args, checked: true },
};

export const Focus: Story = {
  args: { ...Default.args, className: 'denhaag-checkbox--focus' },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const Error: Story = {
  args: { ...Default.args, error: true },
};

export const WithLabel: Story = {
  render: (args) => <FormControlLabel label="Checkbox" input={<Checkbox {...args} />} />,
};

export const Group: Story = {
  render: () => (
    <FormFieldGroup>
      <FormFieldGroupLabel>Label</FormFieldGroupLabel>
      <FormFieldInput>
        <FormControlLabel
          label="Checkbox One"
          input={
            <Checkbox id={'checkbox-1'} onChange={action('Checkbox One action')} name={'checkbox'} value={'one'} />
          }
        />
        <FormControlLabel
          label="Checkbox Two"
          input={
            <Checkbox id={'checkbox-2'} onChange={action('Checkbox Two action')} name={'checkbox'} value={'two'} />
          }
        />
        <FormControlLabel
          label="Checkbox Three"
          input={
            <Checkbox id={'checkbox-3'} onChange={action('Checkbox Three action')} name={'checkbox'} value={'three'} />
          }
        />
      </FormFieldInput>
    </FormFieldGroup>
  ),
};
