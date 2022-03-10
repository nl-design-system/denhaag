import React, { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';
import { CircleWarningIcon, SvgIconProps } from '@gemeente-denhaag/icons';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Whether the input should be disabled
   */
  disabled?: boolean;

  /**
   * Whether the input field is in a error state.
   */
  invalid?: boolean;

  /**
   * Icon to replace the default invalid icon
   */
  invalidIcon?: React.ReactElement<SvgIconProps>;
}

export const TextArea: React.FC<TextAreaProps> = forwardRef(function DenHaagTextArea(
  props: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const inputClasses = clsx('denhaag-textarea__input', {
    'denhaag-textarea__input--invalid': props.invalid,
    'denhaag-textarea__input--disabled': props.disabled,
  });

  const invalidIcon = React.cloneElement(props.invalidIcon || <CircleWarningIcon />, {
    className: 'denhaag-textarea__invalid-icon',
  });

  return (
    <div className={'denhaag-textarea'}>
      <textarea className={inputClasses} ref={ref} aria-invalid={props.invalid || undefined} {...props} />
      <div className={'denhaag-textarea__icons'}>{props.invalid && invalidIcon}</div>
    </div>
  );
});

export default TextArea;
