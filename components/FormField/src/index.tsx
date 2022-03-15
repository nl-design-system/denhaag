import React, { HTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  input: React.ReactElement;
  error?: boolean;
  description?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, input, error, description, ...props }: FormFieldProps) => {
  const className = clsx('denhaag-form-field', { 'denhaag-form-field--error': error }, props.className);
  const Input = input.type;
  const id = input.props.id || `input-${Math.floor(Math.random() * 10000)}`;
  const describedBy = input.props['aria-describedby'] || `description-${Math.floor(Math.random() * 10000)}`;

  return (
    <div {...props} className={className}>
      <label htmlFor={id} className="denhaag-form-field__label">
        {label}
      </label>
      <div className="denhaag-form-field__input">
        <Input id={id} aria-describedby={describedBy} {...input.props} />
      </div>
      {description && (
        <span id={describedBy} className="denhaag-form-field__description">
          {description}
        </span>
      )}
    </div>
  );
};

export default FormField;
