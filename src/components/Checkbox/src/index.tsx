import MaterialCheckbox from '@material-ui/core/Checkbox';
import React from 'react';
import { BaseClassesProps } from '@gemeente-denhaag/baseprops';

import { CheckedIcon, UncheckedBoxIcon } from '@gemeente-denhaag/icons';

import './mui-override.css';
import './checkbox.css';
import { StylesProvider } from '@material-ui/core';

import { classes } from './bem-mapping';

export interface CheckboxProps extends BaseClassesProps {
  /**
   * If `true` the Checkbox is checked.
   * See https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/checkboxes/Checkboxes.tsx
   * For an example on the needed state machine to use this property.
   */
  checked?: boolean;
  /**
   * If `true` then Checkbox will be checked by default.
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate?: boolean;
  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: Record<string, unknown>;
  /**
   * Color for the component.
   */
  color?: 'default' | 'primary' | 'secondary';
  /**
   * Size of the component.
   */
  size?: 'small' | 'medium';
  /**
   * Disables Checkbox
   */
  disabled?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<unknown>) => void;

  checkedIcon?: React.ReactNode;
}

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
export const Checkbox: React.FC<CheckboxProps> = () => (
  <StylesProvider injectFirst>
    <MaterialCheckbox classes={classes} icon={<UncheckedBoxIcon />} checkedIcon={<CheckedIcon />} disableRipple />
  </StylesProvider>
);

/**
 * Default export for Checkbox
 */
export default Checkbox;
export * from '@gemeente-denhaag/formcontrollabel';
export * from '@gemeente-denhaag/formgroup';
