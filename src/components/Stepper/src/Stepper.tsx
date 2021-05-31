import React from 'react';
import MaterialStepper from '@material-ui/core/Stepper';
import BaseProps from '@gemeente-denhaag/baseprops';

import { stepperClasses } from './bem-mapping';

export interface StepperProps extends BaseProps {
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number;
}

/**
 * A Stepper conveys progress through numbered steps.
 * @param props The properties of a Stepper component.
 * @constructor Constructs an instance of Stepper.
 */
export const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  return (
    <MaterialStepper orientation="vertical" connector={<React.Fragment />} classes={stepperClasses} {...props}>
      {props.children}
    </MaterialStepper>
  );
};

export default Stepper;
