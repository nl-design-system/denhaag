import React from 'react';

import './radio.css';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface RadioProps extends BaseProps {
  /**
   * If `true` the Checkbox is checked.
   * For an example on the needed state machine to use this property.
   */
  checked?: boolean;

  /**
   * The label displayed next to the input
   */
  label: string;

  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: Record<string, unknown>;

  /**
   * Overwrite the Icon shown when in the unchecked state.
   */
  checkedIcon?: React.ReactNode;

  /**
   * Overwrite the Icon shown when in the checked state.
   */
  uncheckedIcon?: React.ReactNode;

  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent) => void;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  label,
  inputProps,
  checked,
  onChange,
  checkedIcon,
  uncheckedIcon,
}: RadioProps) => {
  const [isChecked, setChecked] = React.useState(checked);
  const icon = isChecked ? checkedIcon : uncheckedIcon;

  const radioComponent = (
    <>
      <input
        id={id}
        type={'radio'}
        {...inputProps}
        onChange={(event) => {
          setChecked(event.target.checked);
          if (onChange) onChange(event);
        }}
      />
      {icon}
    </>
  );

  return label ? (
    <label htmlFor={id}>
      {radioComponent}
      {label}
    </label>
  ) : (
    radioComponent
  );
};

/**
 * Default export for Radio
 */
export default Radio;
