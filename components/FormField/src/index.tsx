import React, { HTMLAttributes, LabelHTMLAttributes, FieldsetHTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export interface FormFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const FormFieldLabel: React.FC<FormFieldLabelProps> = ({ className, ...props }: FormFieldLabelProps) => {
  const classes = clsx('denhaag-form-field__label', className);

  return (
    <label className={classes} {...props}>
      {props.children}
    </label>
  );
};

export interface FormFieldInputProps extends HTMLAttributes<HTMLDivElement> {}

export const FormFieldInput: React.FC<FormFieldInputProps> = ({ className, ...props }: FormFieldInputProps) => {
  const classes = clsx('denhaag-form-field__input', className);

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
};

export interface FormFieldDescriptionProps extends HTMLAttributes<HTMLSpanElement> {}

export const FormFieldDescription: React.FC<FormFieldDescriptionProps> = ({
  className,
  ...props
}: FormFieldDescriptionProps) => {
  const classes = clsx('denhaag-form-field__description', className);

  return (
    <span className={classes} {...props}>
      {props.children}
    </span>
  );
};

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({ className, error, ...props }: FormFieldProps) => {
  const classes = clsx('denhaag-form-field', { 'denhaag-form-field--error': error }, className);

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
};

export interface FormFieldGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  error?: boolean;
}

export const FormFieldGroup: React.FC<FormFieldGroupProps> = ({ className, error, ...props }: FormFieldGroupProps) => {
  const classes = clsx('denhaag-form-field', { 'denhaag-form-field--error': error }, className);

  return (
    <fieldset className={classes} {...props}>
      {props.children}
    </fieldset>
  );
};

export interface FormFieldGroupLabelProps extends HTMLAttributes<HTMLLegendElement> {}

export const FormFieldGroupLabel: React.FC<FormFieldGroupLabelProps> = ({
  className,
  ...props
}: FormFieldGroupLabelProps) => {
  const classes = clsx('denhaag-form-field__label', className);

  return (
    <legend className={classes} {...props}>
      {props.children}
    </legend>
  );
};

export default FormField;
