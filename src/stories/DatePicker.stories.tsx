import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import DatePicker, { DatePickerProps, PickersUtilsProvider } from '../components/DatePicker/DatePicker'
import DateFnsUtils from '@date-io/date-fns'
import pkg from '../components/DatePicker/package.json'

export default {
  title: 'Components/DatePicker',
  parameters: {
    componentSubtitle: pkg.version
  },
  component: DatePicker
} as Meta

const Template: Story<DatePickerProps> = (args: any) => (
  <PickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker value='30-08-1997' onChange={null} />
  </PickersUtilsProvider>
)

/**
 * Default Checkbox
 */
export const Default: Story<DatePickerProps> = Template.bind({})
Default.args = {
}
