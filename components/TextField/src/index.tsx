import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';
import { AlertTriangleIcon } from '@gemeente-denhaag/icons';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input field is in a error state.
   */
  invalid?: boolean;
}

export const TextField: React.FC<TextFieldProps> = forwardRef(function DenHaagTextField(
  props: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputClasses = clsx('denhaag-textfield__input', {
    'denhaag-textfield__input--invalid': props.invalid,
    'denhaag-textfield__input--disabled': props.disabled,
  });

  return (
    <div className={'denhaag-textfield'}>
      <input className={inputClasses} ref={ref} {...props} />
      {props.invalid && <AlertTriangleIcon className="denhaag-textfield__invalid-icon" />}
    </div>
  );
});

export default TextField;
