import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { CheckedIcon } from '@gemeente-denhaag/icons';

import './index.scss';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Displays the checkbox red.
   */
  error?: boolean;
  /**
   * Disables Checkbox
   */
  disabled?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<unknown>) => void;
  /**
   * Overwrite the Icon shown when in the checked state.
   */
  checkedIcon?: React.ReactNode;
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  error = false,
  checked = false,
  checkedIcon = <CheckedIcon />,
  onChange,
  ...props
}: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(checked);
  const classes = clsx('denhaag-checkbox', { 'denhaag-checkbox--error': error }, className);

  return (
    <span className={classes}>
      <input
        type="checkbox"
        className="denhaag-checkbox__input"
        checked={isChecked}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setChecked(!isChecked);
          if (onChange) {
            onChange(event);
          }
        }}
        {...props}
      />
      <span className="denhaag-checkbox__icon">{checkedIcon}</span>
    </span>
  );
};

export default Checkbox;
