import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, {
  CheckboxProps
} from '../../components/input/Checkbox/Checkbox'
import FormControlLabel from '../../components/input/FormControlLabel/FormControlLabel'
import pkg from '../../components/input/Checkbox/package.json'

export default {
  title: 'Components/Input/Checkbox',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
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
  defaultChecked: true
}

/**
 * Small Checkbox
 */
export const Small: Story<CheckboxProps> = Template.bind({})
Small.args = {
  size: 'small'
}

/**
 * Indeterminate Checkbox
 */
export const Indeterminate: Story<CheckboxProps> = Template.bind({})
Indeterminate.args = {
  indeterminate: true
}

/**
 * Disabled Checkbox
 */
export const Disabled: Story<CheckboxProps> = Template.bind({})
Disabled.args = {
  disabled: true
}
