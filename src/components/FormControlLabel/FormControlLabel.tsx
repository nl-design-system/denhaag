import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core'
import React, { ReactElement } from 'react'

export interface FormControlLabelProps {
  /**
   * A control instance, it can be a Radio, a Switch or a Checkbox
   */
  control: ReactElement
  /**
   * The label to display for the component
   */
  label: string
}

/**
 * FormControlLabels allow the developer to add a label to some components
 */
export const FormControlLabel: React.FC<FormControlLabelProps> = ({
  control,
  label
}) => {
  return <MaterialFormControlLabel control={control} label={label} />
}
