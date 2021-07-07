import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Checkbox from '../../Checkbox';
import FormControlLabel from '../../FormControlLabel';
import FormGroup, { FormGroupProps } from '.';
import pkg from '../package.json';

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

export const Default: Story<FormGroupProps> = (args: FormGroupProps) => (
  <FormGroup {...args} label="Label" helperText="Helper text">
    <FormControlLabel {...args} control={<Checkbox />} label="Checkbox 1" />
    <FormControlLabel {...args} control={<Checkbox />} label="Checkbox 2" />
  </FormGroup>
);
