import { TextField as MaterialTextField } from '@material-ui/core';
import React from 'react';
import { StandardTextFieldProps } from './StandardTextFieldProps';

export type TextFieldProps = StandardTextFieldProps;

export const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <MaterialTextField variant="standard" {...props} />;
};

/**
 * Default export for TextField
 */
export default TextField;
