import { DatePicker as MaterialDatePicker } from '@material-ui/pickers/DatePicker'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { ReactElement, ReactNode } from 'react'

export interface DatePickerProps {
  value: any
  onChange: () => void
}

export interface PickersUtilsProviderProps {
  utils: any
  children: ReactNode
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  ...props
}) => {
  return <MaterialDatePicker value={value} onChange={onChange} />
}

export const PickersUtilsProvider: React.FC<PickersUtilsProviderProps> = ({
  utils,
  children
}) => {
  return <MuiPickersUtilsProvider utils={utils} children={children} />
}

export default DatePicker
