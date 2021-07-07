import MaterialCheckbox from '@material-ui/core/Checkbox';
import React from 'react';
import { BaseClassesProps } from '@gemeente-denhaag/baseprops';

import { CheckedIcon, UncheckedBoxIcon } from '@gemeente-denhaag/icons';

import './mui-override.css';
import './checkbox.css';
import { StylesProvider } from '@material-ui/core';

import { classes } from './bem-mapping';
import clsx from 'clsx';

export interface CheckboxProps extends BaseClassesProps {
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
   * Color for the component.
   */
  color?: 'default' | 'error';
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
export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const rootStyles = clsx('denhaag-checkbox', {
    'denhaag-checkbox--error': props.color === 'error',
  });
  classes.root = rootStyles;
  const uncheckedIcon = props.uncheckedIcon ?? <UncheckedBoxIcon />;
  const checkedIcon = props.checkedIcon ?? <CheckedIcon />;

  return (
    <StylesProvider injectFirst>
      <MaterialCheckbox
        disabled={props.disabled}
        classes={classes}
        icon={uncheckedIcon}
        checkedIcon={checkedIcon}
        disableRipple
        tabIndex={0}
      />
    </StylesProvider>
  );
};

/**
 * Default export for Checkbox
 */
export default Checkbox;
export * from '@gemeente-denhaag/formcontrollabel';
export * from '@gemeente-denhaag/formgroup';
