import React, { HTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export interface FormFieldDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
}

export const FormFieldDescription: React.FC<FormFieldDescriptionProps> = (props: FormFieldDescriptionProps) => {
  const className = clsx(
    'denhaag-form-field-description',
    {
      'denhaag-form-field-description--error': props.error,
    },
    props.className,
  );

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default FormFieldDescription;
