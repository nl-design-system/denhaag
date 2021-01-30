import React from "react";
import MaterialButtonGroup from "@material-ui/core/ButtonGroup";
import BaseProps from "../../BaseProps/BaseProps";

export interface ButtonGroupProps extends BaseProps {
  /**
   * The color of the component.
   */
  color?: "default" | "inherit" | "primary" | "secondary";

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;

  /**
   * If true, the buttons will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, no elevation is used.
   */
  disableElevation?: boolean;

  /**
   * If true, the button keyboard focus ripple will be disabled.
   */
  disableFocusRipple?: boolean;

  /**
   * If true, the button ripple effect will be disabled.
   */
  disableRipple?: boolean;

  /**
   * If true, the buttons will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * The group orientation (layout flow direction).
   */
  orientation?: "horizontal" | "vertical";

  /**
   * The size of the button. small is equivalent to the dense button styling.
   */
  size?: "large" | "medium" | "small";

  /**
   * The variant to use.
   */
  variant?: "contained" | "outlined" | "text";
}

/**
 * Groups a series of Button components in a single component.
 * @param props The properties of a ButtonGroup component.
 * @constructor Constructs an instance of ButtonGroup.
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  return <MaterialButtonGroup {...props}>{props.children}</MaterialButtonGroup>;
};

export default ButtonGroup;
