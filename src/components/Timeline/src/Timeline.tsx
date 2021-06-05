import React from 'react';
import MaterialStepper from '@material-ui/core/Stepper';
import BaseProps from '@gemeente-denhaag/baseprops';

import { timelineClasses } from './bem-mapping';

export interface TimelineProps extends BaseProps {
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number;
}

/**
 * A Stepper conveys progress through numbered steps.
 * @param props The properties of a Timeline component.
 * @constructor Constructs an instance of Timeline.
 */
export const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  return (
    <MaterialStepper
      nonLinear
      orientation="vertical"
      connector={<React.Fragment />}
      classes={timelineClasses}
      {...props}
    >
      {props.children}
    </MaterialStepper>
  );
};

export default Timeline;
