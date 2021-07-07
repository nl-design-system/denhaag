import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';

import { Heading5, Paragraph } from '@gemeente-denhaag/typography';

import './formgroup.css';
import { StylesProvider } from '@material-ui/core';

export interface FormGroupProps extends BaseProps {
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
  return (
    <StylesProvider injectFirst>
      <div className="denhaag-form-group">
        {props.label && <Heading5>{props.label}</Heading5>}
        {props.children}
        {props.helperText && <Paragraph>{props.helperText}</Paragraph>}
      </div>
    </StylesProvider>
  );
};

/**
 * Default export for FormGroup
 */
export default FormGroup;
