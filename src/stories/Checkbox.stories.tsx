import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Checkbox, CheckboxProps } from '../components/Checkbox';
import { FormControlLabel } from '../components/FormControlLabel';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args: any) =>
  <FormControlLabel
    label="Checkbox"
    control={<Checkbox {...args}/>}
  />;

/**
 * Default Checkbox
 */
export const Default : Story<CheckboxProps> = Template.bind({});
Default.args = {
  disabled: false
};

/**
 * Primary Checkbox
 */
export const Primary : Story<CheckboxProps> = Template.bind({});
Primary.args = {
  color: 'primary',
  disabled: false,
};

/**
 * Secondary Checkbox
 */
export const Secondary: Story<CheckboxProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
  disabled: false,
};

/**
 * Disabled Checkbox
 */
export const Disabled : Story<CheckboxProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};
