import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '../components/Checkbox/Checkbox'
import FormControlLabel from '../components/FormControlLabel/FormControlLabel'
import FormGroup, { FormGroupProps } from '../components/FormGroup/FormGroup'

export default {
  title: 'Forms/FormGroup',
  component: FormGroup
} as Meta

const Template: Story<FormGroupProps> = (args: any) => (
  <FormGroup {...args}>
    <FormControlLabel {...args} control={<Checkbox />} label='Checkbox 1' />
    <FormControlLabel {...args} control={<Checkbox />} label='Checkbox 2' />
  </FormGroup>
)

export const Default: Story<FormGroupProps> = Template.bind({})

export const Row: Story<FormGroupProps> = Template.bind({})
Row.args = {
  row: true
}
