import React from 'react';
import clsx from 'clsx';
import BaseProps from '@gemeente-denhaag/baseprops';
import { CheckedIcon, UncheckedBoxIcon } from '@gemeente-denhaag/icons';

import './checkbox.css';

export interface CheckboxProps extends Omit<BaseProps, 'classes'> {
  /**
   * If `true` the Checkbox is checked.
   * See https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/checkboxes/Checkboxes.tsx
   * For an example on the needed state machine to use this property.
   */
  checked?: boolean;
  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: Record<string, unknown>;
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
   * Overwrite the Icon shown when in the unchecked state.
   */
  uncheckedIcon?: React.ReactNode;

  /**
   * Overwrite the Icon shown when in the checked state.
   */
  checkedIcon?: React.ReactNode;
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  checkedIcon = <CheckedIcon />,
  uncheckedIcon = <UncheckedBoxIcon />,
  ...props
}: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(checked);
  const rootStyles = clsx(
    'denhaag-checkbox',
    {
      'denhaag-checkbox--error': props.error,
      'denhaag-checkbox--checked': isChecked,
      'denhaag-checkbox--disabled': props.disabled,
    },
    props.className,
  );

  const icon = isChecked ? checkedIcon : uncheckedIcon;

  return (
    <span className={rootStyles}>
      <input
        {...props.inputProps}
        disabled={props.disabled}
        type="checkbox"
        className="denhaag-checkbox__input"
        checked={isChecked}
        onChange={(event) => {
          setChecked(!isChecked);
          if (props.onChange) {
            props.onChange(event);
          }
        }}
      />
      <div className="denhaag-checkbox__icon">{icon}</div>
    </span>
  );
};

export default Checkbox;
