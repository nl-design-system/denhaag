import React from 'react';
import { Stepper as MaterialStepper } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

import { timelineClasses } from './bem-mapping';

export interface TimelineProps extends BaseProps {
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number;
}

/**
 * The `Timeline` displays a progress through a sequence by breaking it up into
 * multiple logical and numbered steps. Use the timeline when a series of
 * information needs to be ordered by time (ascending or descending). It
 * represents the steps in a process in a chronological order. This process is
 * part of, for example, a request that the user has made.
 *
 * @param props The properties of a Timeline component.
 * @constructor Constructs an instance of Timeline.
 */
export const Timeline: React.FC<TimelineProps> = ({ activeStep, children, id = undefined }: TimelineProps) => {
  return (
    <MaterialStepper
      activeStep={activeStep}
      classes={timelineClasses}
      connector={<React.Fragment />}
      id={id}
      nonLinear
      orientation="vertical"
    >
      {children}
    </MaterialStepper>
  );
};

export default Timeline;
