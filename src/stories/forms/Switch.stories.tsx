import React from 'react'
import { Meta, Story } from '@storybook/react'
import pkg from '../../components/package.json'
import Switch, { SwitchProps } from '../../components/forms/Switch/Switch'
import { FormControlLabel } from '../../components/FormControlLabel/FormControlLabel'

export default {
  title: 'Components/Forms/Switch',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Switch
} as Meta

const Template: Story<SwitchProps> = (args: any) => {
  return (
    <div>
      <FormControlLabel
        label='Default checked switch'
        control={<Switch defaultChecked {...args} />}
      />
      <FormControlLabel
        label='Unchecked switch'
        control={<Switch {...args} />}
      />
    </div>
  )
}

/**
 * Default Switch
 */
export const Default: Story<SwitchProps> = Template.bind({})

/**
 * Primary Switch
 */
export const Primary: Story<SwitchProps> = Template.bind({})
Primary.args = {
  color: 'primary'
}

/**
 * Secondary Switch
 */
export const Secondary: Story<SwitchProps> = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

/**
 * Disabled Switch
 */
export const Disabled: Story<SwitchProps> = Template.bind({})
Disabled.args = {
  disabled: true
}
