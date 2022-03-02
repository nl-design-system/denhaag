import React, { HTMLAttributes } from 'react';
import './index.scss';

export type FormFieldProps = HTMLAttributes<HTMLDivElement>;

export const FormField: React.FC<FormFieldProps> = (props: FormFieldProps) => {
  return (
    <div className={'denhaag-form-field'} {...props}>
      {props.children}
    </div>
  );
};

export default FormField;
