import React, { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

import './index.scss';

export interface FormControlLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Whether the input element is disabled.
   */
  disabled?: boolean;
  /**
   * The input element to display for the component.
   */
  input: React.ReactNode;

  /**
   * The label to display for the component.
   */
  label: string;
}

/**
 * FormControlLabels allow the developer to add a label to some components
 */
export const FormControlLabel: React.FC<FormControlLabelProps> = ({
  className,
  disabled = false,
  input,
  label,
  ...props
}: FormControlLabelProps) => {
  const classes = clsx('denhaag-form-control-label', { 'denhaag-form-control-label--disabled': disabled }, className);

  return (
    <label className={classes} {...props}>
      <span className="denhaag-form-control-label__input">{input}</span>
      <span className="denhaag-form-control-label__label">{label}</span>
    </label>
  );
};

/**
 * Default export for FormControlLabel
 */
export default FormControlLabel;
