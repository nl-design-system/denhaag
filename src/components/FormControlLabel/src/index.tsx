import MaterialFormControlLabel from '@material-ui/core/FormControlLabel';
import React, { ReactElement } from 'react';
import { BaseClassesProps } from '@gemeente-denhaag/baseprops';
import { StylesProvider } from '@material-ui/core';

import { classes } from './bem-mapping';

import './formcontrollabel.css';

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
export const FormControlLabel: React.FC<FormControlLabelProps> = (props: FormControlLabelProps) => {
  return (
    <StylesProvider injectFirst>
      <MaterialFormControlLabel {...props} classes={classes} />
    </StylesProvider>
  );
};

/**
 * Default export for FormControlLabel
 */
export default FormControlLabel;
