import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps
} from '../../components/input/Pickers/KeyboardDatePicker/KeyboardDatePicker'
import { PickersUtilsProvider } from '../../components/input/Pickers/PickersUtilsProvider/PickersUtilsProvider'
import DateFnsUtils from '@date-io/date-fns'
import pkg from '../../components/input/Pickers/package.json'

export default {
  title: 'Components/Pickers/KeyboardDatePicker',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: KeyboardDatePicker
} as Meta

const Template: Story<KeyboardDatePickerProps> = (args: any) => {
  const [value, setValue] = React.useState('1970-01-01')
  args.onChange = (newValue: any) => {
    setValue(newValue)
  }
  args.value = value

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker {...args} />
    </PickersUtilsProvider>
  )
}

/**
 * Default KeyboardDatePicker
 */
export const Default: Story<KeyboardDatePickerProps> = Template.bind({})
Default.args = {
  clearable: true
}
