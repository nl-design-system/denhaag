import { DatePicker as MaterialDatePicker } from '@material-ui/pickers'
import { MaterialUiPickersDate as DateIOType } from '@material-ui/pickers/typings/date'
import React, { ReactNode } from 'react'
import BaseDatePickerProps from '../BaseDatePickerProps/BaseDatePickerProps'
import { InputAdornmentProps, IconButtonProps } from '@material-ui/core'

export interface KeyboardDatePickerProps extends BaseDatePickerProps {
  /**
   * 	Keyboard onChange callback
   */
  onChange: (date: DateIOType, value?: string | null) => void
  /**
   * 	Props to pass to keyboard input adornment
   */
  inputAdormentProps?: Partial<InputAdornmentProps>
  /**
   * String value for controlling value with pure input string. Overrides value prop.
   */
  inputValue?: string
  /**
   * Props to pass to keyboard adornment button
   */
  KeyboardButtonProps?: Partial<IconButtonProps>
  /**
   * Icon displaying for open picker button
   */
  keyboardIcon?: ReactNode
  /**
   * Custom mask. Can be used to override generate from format. (e.g. __/__/____ __:__)
   */
  mask?: string
  /**
   * Char string that will be replaced with number (for "_" mask will be "__/__/____")
   */
  maskChar?: string
  /**
   * Refuse values regexp
   */
  refuse?: RegExp
  /**
   * Custom formatter to be passed into Rifm component
   */
  rifmFormatter: (str: string) => string
}

export const KeyboardDatePicker: React.FC<KeyboardDatePickerProps> = (
  props: KeyboardDatePickerProps
) => {
  return <MaterialDatePicker {...props} />
}

export default KeyboardDatePicker
