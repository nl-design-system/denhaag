import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Switch, { SwitchProps } from '../../components/forms/Switch/Switch'
import { FormControlLabel } from '../../components/FormControlLabel/FormControlLabel'

export default {
  title: 'Components/Forms/Switch',
  component: Switch
} as Meta

const Template: Story<SwitchProps> = (args: any) => {
  return <FormControlLabel label='Switch' control={<Switch {...args} />} />
}

/**
 * Default Switch
 */
export const Default: Story<SwitchProps> = Template.bind({})
Default.args = {
  color: 'default',
  disabled: false
}

/**
 * Primary Switch
 */
export const Primary: Story<SwitchProps> = Template.bind({})
Primary.args = {
  color: 'primary',
  defaultChecked: true,
  disabled: false
}

/**
 * Secondary Switch
 */
export const Secondary: Story<SwitchProps> = Template.bind({})
Secondary.args = {
  color: 'secondary',
  defaultChecked: true,
  disabled: false
}

/**
 * Disabled Switch
 */
export const Disabled: Story<SwitchProps> = Template.bind({})
Disabled.args = {
  disabled: true
}
