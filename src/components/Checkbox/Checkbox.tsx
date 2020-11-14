import MaterialCheckbox from '@material-ui/core/Checkbox'
import React from 'react'

export interface CheckboxProps {
  /**
   * If `true` the Checkbox is checked.
   */
  checked?: boolean
  /**
   * If `true` then Checkbox will be checked by default.
   */
  defaultChecked?: boolean
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate?: boolean
  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: object
  /**
   * Color for the component.
   */
  color?: 'default' | 'primary' | 'secondary'
  /**
   * Size of the component.
   */
  size?: 'small' | 'medium'
  /**
   * Disables Checkbox
   */
  disabled?: boolean
  /**
   * Callback fired when the state is changed.
   */
  onChange?: () => void
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <MaterialCheckbox
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      indeterminate={props.indeterminate}
      inputProps={props.inputProps}
      color={props.color}
      size={props.size}
      disabled={props.disabled}
      onChange={props.onChange}
      {...props}
    />
  )
}

/**
 * Default export for Checkbox
 */
export default Checkbox
