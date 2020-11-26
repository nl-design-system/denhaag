import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { KeyboardDatePicker, KeyboardDatePickerProps } from '../components/Pickers/KeyboardDatePicker/KeyboardDatePicker'
import { PickersUtilsProvider } from '../components/Pickers/PickersUtilsProvider/PickersUtilsProvider'
import DateFnsUtils from '@date-io/date-fns'
import pkg from '../components/Pickers/KeyboardDatePicker/package.json'

export default {
  title: 'Components/Pickers/KeyboardDatePicker',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: KeyboardDatePicker
} as Meta

const Template: Story<KeyboardDatePickerProps> = (args: any) => (
  <PickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker value='1970-01-01' onChange={null} />
  </PickersUtilsProvider>
)

/**
 * Default Checkbox
 */
export const Default: Story<DatePickerProps> = Template.bind({})
Default.args = {}
