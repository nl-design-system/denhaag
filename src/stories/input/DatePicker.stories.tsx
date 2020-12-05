import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import DatePicker, {
  DatePickerProps
} from '../../components/input/Pickers/DatePicker/DatePicker'
import { PickersUtilsProvider } from '../../components/input/Pickers/PickersUtilsProvider/PickersUtilsProvider'
import DateFnsUtils from '@date-io/date-fns'
import pkg from '../../components/input/Pickers/package.json'

export default {
  title: 'Components/Pickers/DatePicker',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: DatePicker
} as Meta

const Template: Story<DatePickerProps> = (args: any) => {
  const [value, setValue] = React.useState('1970-01-01')
  args.onChange = (newValue: any) => {
    setValue(newValue)
  }
  args.value = value

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker {...args} />
    </PickersUtilsProvider>
  )
}

/**
 * Default Datepicker
 */
export const Default: Story<DatePickerProps> = Template.bind({})
Default.args = {
  variant: 'dialog'
}

/**
 * Inline Checkbox
 */
export const Inline: Story<DatePickerProps> = Template.bind({})
Inline.args = {
  variant: 'inline'
}

/**
 * Inline Checkbox
 */
export const Static: Story<DatePickerProps> = Template.bind({})
Static.args = {
  variant: 'static'
}
