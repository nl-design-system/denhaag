import MaterialRadioGroup from '@material-ui/core/RadioGroup'
import React from 'react'
import { BaseChildrenProps } from '../../BaseProps/BaseProps'

export interface RadioGroupProps extends BaseChildrenProps {
  /**
   * The default `input` element value. Use when the component is not
   * controlled. Using this you can set select which of the radio subcomponents
   * should be checked.
   */
  defaultValue?: Array<string> | number | string

  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name?: string

  /**
   * **Signature**: `function(event: object) => void`
   * The event source of the callback. You can pull out the new value by
   * accessing `event.target.value` (string).
   */
  onChange?: (event: object) => void

  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value?: any

  /**
   * Display groups of elements in a compact row.
   */
  row?: boolean
}

export const RadioGroup: React.FC<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  return <MaterialRadioGroup {...props}>{props.children}</MaterialRadioGroup>
}

/**
 * Default export for RadioGroup
 */
export default RadioGroup
