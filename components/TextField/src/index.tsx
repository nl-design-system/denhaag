import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import './index.scss';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input field is in a error state.
   */
  error?: boolean;
  /**
   * placeholder text for the input (also used as aria-label).
   */
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = forwardRef(function DenHaagTextField(
  props: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={'denhaag-textfield'}>
      <input className={'denhaag-textfield__input'} ref={ref} {...props} />
    </div>
  );
});

export default TextField;
