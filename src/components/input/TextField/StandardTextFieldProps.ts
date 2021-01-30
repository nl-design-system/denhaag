import { InputProps } from '@material-ui/core/Input/Input'
import { BaseTextFieldProps } from './BaseTextFieldProps'

export interface StandardTextFieldProps extends BaseTextFieldProps {
  onBlur?: InputProps['onBlur']

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: InputProps['onChange']

  onFocus?: InputProps['onFocus']

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps?: Partial<InputProps>

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputProps['inputProps']
}
