import { Checkbox as MaterialCheckbox } from '@material-ui/core'
import React from 'react'

export interface CheckboxProps {
  /**
   * If true the Checkbox is checked.
   */
  checked?: boolean
  /**
   * Color for the component.
   */
  color?: 'default' | 'primary' | 'secondary'
  /**
   * Disables Checkbox
   */
  disabled?: boolean
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  color = 'default',
  disabled,
  ...props
}) => {
  return (
    <MaterialCheckbox
      color={color}
      disabled={disabled}
      checked={checked}
      {...props}
    />
  )
}

/**
 * Default export for Checkbox
 */
export default Checkbox
