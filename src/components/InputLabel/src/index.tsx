import MaterialInputLabel from "@material-ui/core/InputLabel";
import React from "react";
import { FormLabelProps } from "@material-ui/core";
import BaseProps from "@gemeente-denhaag/baseprops";

export interface InputLabelProps extends BaseProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: FormLabelProps["color"];

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation?: boolean;

  /**
   * If `true`, apply disabled class.
   */
  disabled?: boolean;

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: boolean;

  /**
   * If `true`, the input of this label is focused.
   */
  focused?: boolean;

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin?: "dense";

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required?: boolean;

  /**
   * If `true`, the label is shrunk.
   */
  shrink?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = (props: InputLabelProps) => {
  return <MaterialInputLabel {...props}>{props.children}</MaterialInputLabel>;
};

/**
 * Default export for InputLabel
 */
export default InputLabel;
