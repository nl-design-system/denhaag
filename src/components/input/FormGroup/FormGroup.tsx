import MaterialFormGroup from "@material-ui/core/FormGroup";
import React from "react";
import BaseProps from "@gemeente-denhaag/baseprops";

export interface FormGroupProps extends BaseProps {
  /**
   * Display groups of elements in a compact row.
   */
  row?: boolean;
}

/**
 *  FormGroup wraps controls such as Checkbox and Switch.
 *  It provides compact row layout. For the Radio, you should be using the RadioGroup component instead of this one.
 */
export const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
  return <MaterialFormGroup {...props}>{props.children}</MaterialFormGroup>;
};

/**
 * Default export for FormGroup
 */
export default FormGroup;
