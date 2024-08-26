import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import {
  FormField as UtrechtFormField,
  FormFieldProps as UtrechtFormFieldProps,
} from '@utrecht/component-library-react';
import './index.scss';
import clsx from 'clsx';

interface FormFieldProps extends PropsWithChildren<UtrechtFormFieldProps> {
  flex?: boolean;
}

const FormField = forwardRef(function FormField(
  { className, flex, ...restProps }: FormFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const classNames = clsx(className, { 'denhaag-form-field--flex': flex });
  return <UtrechtFormField ref={ref} className={classNames} {...restProps} />;
});

export { FormField, FormFieldProps };
export default FormField;
