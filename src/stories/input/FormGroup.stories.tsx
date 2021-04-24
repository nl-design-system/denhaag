import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Checkbox from '../../components/Checkbox/Checkbox';
import FormControlLabel from '../../components/FormControlLabel';
import FormGroup, { FormGroupProps } from '../../components/FormGroup';
import pkg from '../../components/FormGroup/package.json';

export default {
  title: 'Components/Input/FormGroup',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: FormGroup,
} as Meta;

const Template: Story<FormGroupProps> = (args: FormGroupProps) => (
  <FormGroup {...args}>
    <FormControlLabel {...args} control={<Checkbox />} label="Checkbox 1" />
    <FormControlLabel {...args} control={<Checkbox />} label="Checkbox 2" />
  </FormGroup>
);

export const Default: Story<FormGroupProps> = Template.bind({});

export const Row: Story<FormGroupProps> = Template.bind({});
Row.args = {
  row: true,
};
