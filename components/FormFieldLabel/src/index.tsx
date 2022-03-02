import React, { HTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export type FormFieldLabelProps = HTMLAttributes<HTMLLabelElement>;

export const FormFieldLabel: React.FC<FormFieldLabelProps> = (props: FormFieldLabelProps) => {
  const className = clsx('denhaag-form-field-label', props.className);

  return (
    <label {...props} className={className}>
      {props.children}
    </label>
  );
};

export default FormFieldLabel;
