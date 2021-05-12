import React from 'react';
import MaterialStepper from '@material-ui/core/Stepper';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface StepperProps extends BaseProps {
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number;

  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel?: boolean;

  /**
   * If set the Stepper will not assist in controlling steps for linear flow.
   */
  nonLinear?: boolean;
}

/**
 * A Stepper conveys progress through numbered steps.
 * @param props The properties of a Stepper component.
 * @constructor Constructs an instance of Stepper.
 */
export const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  return (
    <MaterialStepper orientation="vertical" connector={<React.Fragment />} {...props}>
      {props.children}
    </MaterialStepper>
  );
};

export default Stepper;
