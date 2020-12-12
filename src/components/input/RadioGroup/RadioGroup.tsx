import MaterialRadioGroup from '@material-ui/core/RadioGroup'
import React from 'react'

export interface RadioGroupProps {
  /**
   * The children of the component. (for instance, Radio components)
   */
  children?: React.ReactNode

  /**
   * The default `input` element value. Use when the component is not controlled.
   * Using this you can set select which of the radio subcomponents should be checked.
   */
  defaultValue?: Array<string> | number | string

  /**
   * The name used to reference the value of the control. 
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name?: string

  /**
   * **Signature**: `function(event: object) => void`
   * The event source of the callback. You can pull out the new
   * value by accessing `event.target.value` (string). You can
   * pull out the new checked state by accessing
   * `event.target.checked` (boolean).
   */
  onChange?: () => void

  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value?: any

  /**
   * Display groups of elements in a compact row.
   */
  row?: boolean
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return <MaterialRadioGroup {...props} />
}

/**
 * Default export for RadioGroup
 */
export default RadioGroup
