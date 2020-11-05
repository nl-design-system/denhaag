import MaterialFormControlLabel from '@material-ui/core/FormControlLabel'
import React, { ReactElement } from 'react'

export interface FormControlLabelProps {
  /**
   * If true, the component appears selected.
   */
  checked?: boolean
  /**
   * Override or extend the style applied to the component.
   */
  classes?: object
  /**
   *A control instance, it can be a Radio, a Switch or a Checkbox.
   */
  control: ReactElement
  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean
  /**
   * The label to display for the component.
   */
  label?: string
  /**
   * The position of the label.
   */
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top'
  /**
   * Callback fired when the state is changed.
   */
  onChange?: () => void
  /**
   * The value of the component.
   */
  value?: any
}

/**
 * FormControlLabels allow the developer to add a label to some components
 */
export const FormControlLabel: React.FC<FormControlLabelProps> = ({
  checked,
  classes,
  control,
  disabled,
  label,
  labelPlacement,
  onChange,
  value
}) => {
  return (
    <MaterialFormControlLabel
      checked={checked}
      classes={classes}
      control={control}
      disabled={disabled}
      label={label}
      labelPlacement={labelPlacement}
      onChange={onChange}
      value={value}
    />
  )
}

/**
 * Default export for FormControlLabel
 */
export default FormControlLabel
