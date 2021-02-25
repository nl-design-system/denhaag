import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from '../..'
import { ButtonProps } from '../../components/input/Button/Button'
import pkg from '../../components/input/Button/package.json'

export default {
  title: 'Components/Input/Button',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Button
} as Meta


const Template: Story<ButtonProps> = (args: any) => {
  return <Button {...args}>Button</Button>
}

/**
 * Default Button
 */
export const Default = Template.bind({})
Default.args = {
  type: 'primary-action'
}

/**
 * Primary Action Button
 */
export const PrimaryAction: Story<ButtonProps> = Template.bind({})
PrimaryAction.args = {
  type: 'primary-action'
}

/**
 * Secondary Action Button
 */
export const SecondaryAction: Story<ButtonProps> = Template.bind({})
SecondaryAction.args = {
  type: 'secondary-action'
}

/**
 * Disabled Primary Action Button
 */
export const PrimaryActionDisabled: Story<ButtonProps> = Template.bind({})
PrimaryActionDisabled.args = {
  type: 'primary-action',
  disabled: true
}

/**
 * Disabled Secondary Action Button
 */
export const SecondaryActionDisabled: Story<ButtonProps> = Template.bind({})
SecondaryActionDisabled.args = {
  type: 'secondary-action',
  disabled: true
}
