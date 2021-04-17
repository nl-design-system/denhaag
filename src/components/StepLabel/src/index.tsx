import React from "react";
import MaterialStepLabel from "@material-ui/core/StepLabel";
import { StepIconProps } from "@gemeente-denhaag/stepicon";
import BaseProps from "@gemeente-denhaag/baseprops";
// import BaseProps from "@gemeente-denhaag/baseprops";

export interface StepLabelProps extends BaseProps {
  /**
   * Mark the step as disabled, will also disable the button if StepLabelButton is a child of StepLabel.
   * Is passed to child components.
   */
  disabled?: boolean;

  /**
   * The optional node to display.
   */
  optional?: React.ReactNode;

  /**
   * Mark the step as failed.
   */
  error?: boolean;

  /**
   * The label displayed in the step icon.
   */
  icon?: React.ReactNode;

  /**
   * The component to render in place of the StepIcon.
   */
  StepIconComponent?: React.ElementType;

  /**
   * Props applied to the StepIcon element.
   */
  StepIconProps?: Partial<StepIconProps>;
}

/**
 * Shows a label in a Step component within a Stepper component.
 * @param props The properties of a StepLabel component.
 * @constructor Constructs an instance of StepLabel.
 */
const StepLabel: React.FC<StepLabelProps> = (props: StepLabelProps) => {
  return <MaterialStepLabel {...props} />;
};

export default StepLabel;
