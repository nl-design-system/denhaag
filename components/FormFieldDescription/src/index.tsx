import React, { HTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export type FormFieldDescriptionProps = HTMLAttributes<HTMLDivElement>;

export const FormFieldDescription: React.FC<FormFieldDescriptionProps> = (props: FormFieldDescriptionProps) => {
  const className = clsx('denhaag-form-field-description', props.className);

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
};

export default FormFieldDescription;
