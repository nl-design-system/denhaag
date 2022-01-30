import React, { ReactElement } from 'react';
import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core';
import { BaseClassesProps } from '@gemeente-denhaag/baseprops';

import { classes } from './bem-mapping';

import './index.css';
import './mui-override.css';

export interface FormControlLabelProps extends BaseClassesProps {
  /**
   * If true, the component appears selected.
   */
  checked?: boolean;

  /**
   * A control instance, it can be a Radio, a Switch or a Checkbox.
   */
  control: ReactElement;

  /**
   * If true, the component will be disabled.
   */
  disabled?: boolean;

  /**
   * The label to display for the component.
   */
  label: string;

  /**
   * Callback fired when the state is changed.
   */
  onChange?: () => void;

  /**
   * The value of the component.
   */
  value?: unknown;
}

/**
 * FormControlLabels allow the developer to add a label to some components
 */
export const FormControlLabel: React.FC<FormControlLabelProps> = (props: FormControlLabelProps) => (
  <MaterialFormControlLabel {...props} classes={classes} />
);

/**
 * Default export for FormControlLabel
 */
export default FormControlLabel;
