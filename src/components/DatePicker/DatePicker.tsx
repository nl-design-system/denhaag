import { DatePicker as MaterialDatePicker } from '@material-ui/pickers/DatePicker'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { ReactElement, ReactNode } from 'react'

export interface DatePickerProps {
  value: any
  onChange: () => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  ...props
}) => {
  return <MaterialDatePicker value={value} onChange={onChange} {...props} />
}

export default DatePicker
