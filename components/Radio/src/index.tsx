import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import './index.scss';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Displays the checkbox red.
   */
  error?: boolean;
  /**
   * Disables Radio
   */
  disabled?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<unknown>) => void;
}

/**
 * Radio buttons allow the user to select one item from a set.
 */
export const Radio: React.FC<RadioProps> = ({
  className,
  error = false,
  checked = false,
  onChange,
  ...props
}: RadioProps) => {
  const classes = clsx('denhaag-radio', { 'denhaag-radio--error': error }, className);

  return (
    <span className={classes}>
      <input
        type="radio"
        className="denhaag-radio__input"
        defaultChecked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(event);
          }
        }}
        {...props}
      />
      <span className="denhaag-radio__icon">
        <span className="denhaag-radio__icon-inner"></span>
      </span>
    </span>
  );
};

export default Radio;
