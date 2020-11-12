import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '../components/Checkbox/Checkbox'
import FormControlLabel from '../components/FormControlLabel/FormControlLabel'
import pkg from '../components/Checkbox/package.json'

export default {
  title: 'Components/Checkbox',
  parameters: {
    componentSubtitle: pkg.version
  },
  component: Checkbox
} as Meta

const Template: Story<CheckboxProps> = (args: any) => (
  <FormControlLabel label='Checkbox' control={<Checkbox {...args} />} />
)

/**
 * Default Checkbox
 */
export const Default: Story<CheckboxProps> = Template.bind({})
Default.args = {
  color: 'default'
}

/**
 * Primary Checkbox
 */
export const Primary: Story<CheckboxProps> = Template.bind({})
Primary.args = {
  color: 'primary'
}

/**
 * Secondary Checkbox
 */
export const Secondary: Story<CheckboxProps> = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

/**
 * Default Checked Checkbox
 */
export const CheckedByDefault: Story<CheckboxProps> = Template.bind({})
CheckedByDefault.args = {
  defaultChecked: true,
  color: 'default'
}

/**
 * Small Checkbox
 */
export const Small: Story<CheckboxProps> = Template.bind({})
Small.args = {
  size: 'small',
  color: 'default'
}

/**
 * Indeterminate Checkbox
 */
export const Indeterminate: Story<CheckboxProps> = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
  color: 'default'
}

/**
 * Disabled Checkbox
 */
export const Disabled: Story<CheckboxProps> = Template.bind({})
Disabled.args = {
  disabled: true,
  color: 'default'
}
