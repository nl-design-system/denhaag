import {
  FormHelperTextProps,
  InputLabelProps,
  PropTypes,
  SelectProps
} from '@material-ui/core'
import React from 'react'
import { BaseClassesProps } from '@gemeente-denhaag/baseprops/BaseProps'

export interface BaseTextFieldProps extends BaseClassesProps {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus?: boolean

  /**
   * The color of the component. It supports those theme colors that make sense for this component. The default color is 'primary'
   */
  color?: 'primary' | 'secondary'

  /**
   * The default value of the `input` element.
   */
  defaultValue?: unknown

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled?: boolean

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean

  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean

  /**
   * The helper text content.
   */
  helperText?: React.ReactNode

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps?: Partial<InputLabelProps>

  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>

  /**
   * The label content.
   */
  label?: React.ReactNode

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin?: PropTypes.Margin

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline?: boolean

  /**
   * Name attribute of the `input` element.
   */
  name?: string

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string

  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required?: boolean

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax?: string | number

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select?: boolean

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps?: Partial<SelectProps>

  /**
   * The size of the text field.
   */
  size?: 'small' | 'medium'

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: React.InputHTMLAttributes<unknown>['type']

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown
}
