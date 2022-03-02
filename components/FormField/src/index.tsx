import React, { HTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export type FormFieldProps = HTMLAttributes<HTMLDivElement>;

export const FormField: React.FC<FormFieldProps> = (props: FormFieldProps) => {
  const className = clsx('denhaag-form-field', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default FormField;
