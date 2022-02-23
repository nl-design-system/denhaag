import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';
import { CircleWarningIcon, SvgIconProps } from '@gemeente-denhaag/icons';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input should be disabled
   */
  disabled?: boolean;

  /**
   * Whether the input field is in a error state.
   */
  invalid?: boolean;

  /**
   * Icon shown at the end of the input field
   */
  icon?: React.ReactElement<SvgIconProps>;

  /**
   * Icon to replace the default invalid icon
   */
  invalidIcon?: React.ReactElement<SvgIconProps>;
}

export const TextField: React.FC<TextFieldProps> = forwardRef(function DenHaagTextField(
  props: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputClasses = clsx('denhaag-textfield__input', {
    'denhaag-textfield__input--invalid': props.invalid,
    'denhaag-textfield__input--disabled': props.disabled,
  });

  const invalidIcon = React.cloneElement(props.invalidIcon || <CircleWarningIcon />, {
    className: 'denhaag-textfield__invalid-icon',
  });

  return (
    <div className={'denhaag-textfield'}>
      <input className={inputClasses} ref={ref} {...props} />
      <div className={'denhaag-textfield__icons'}>
        {props.invalid && invalidIcon}
        {props.icon}
      </div>
    </div>
  );
});

export default TextField;
