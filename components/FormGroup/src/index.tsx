import React from 'react';
import clsx from 'clsx';
import { Heading5, Paragraph } from '@gemeente-denhaag/typography';

import './index.scss';

export interface FormGroupProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;
  /**
   * The formgroup label shown at the top
   */
  label?: string;

  /**
   * The helpertext shown at the bottom.
   */
  helperText?: string;

  /**
   * When true, turns the helperText red.
   */
  error?: boolean;
}

/**
 *  FormGroup wraps controls such as Checkbox and Switch.
 *  For the Radio, you should be using the RadioGroup component instead of this one.
 */
export const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
  const rootStyles = clsx('denhaag-form-group', {
    'denhaag-form-group--error': props.error,
  });

  return (
    <div className={rootStyles}>
      {props.label && <Heading5>{props.label}</Heading5>}
      {props.children}
      {props.helperText && <Paragraph>{props.helperText}</Paragraph>}
    </div>
  );
};

export default FormGroup;
