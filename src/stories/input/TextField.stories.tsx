import React from 'react'
import { Meta, Story } from '@storybook/react'
import pkg from '../../components/input/TextField/package.json'
import { TextField } from '../../index'
import { BaseTextFieldProps } from '../../components/input/TextField/BaseTextFieldProps'

export default {
  title: 'Components/Input/TextField',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: TextField,
  argTypes: {
    variant: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<BaseTextFieldProps> = (args: BaseTextFieldProps) => {
  return <TextField {...args} />
}

/**
 * Default TextField
 */
export const Default: Story<BaseTextFieldProps> = Template.bind({})
Default.args = {
  label: 'Default text field'
}
/**
 * Primary TextField
 */
export const Primary: Story<BaseTextFieldProps> = Template.bind({})
Primary.args = {
  label: 'Primary text field'
}
/**
 * Secondary TextField
 */
export const Secondary: Story<BaseTextFieldProps> = Template.bind({})
Secondary.args = {
  label: 'Secondary text field',
  color: 'secondary'
}
/**
 * Disabled TextField
 */
export const Disabled: Story<BaseTextFieldProps> = Template.bind({})
Disabled.args = {
  label: 'Disabled text field',
  disabled: true
}
/**
 * Textfield using a Select input component
 */
const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

export const Select = (props: BaseTextFieldProps) => (
  <TextField
    select
    SelectProps={{ native: true }}
    helperText='Please select an option'
    {...props}
  >
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </TextField>
)
