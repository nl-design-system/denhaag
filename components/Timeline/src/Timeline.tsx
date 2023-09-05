import React from 'react';
import { Stepper as MaterialStepper } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';
import './styles/_mui-override.scss';

export interface TimelineProps extends Omit<BaseProps, 'classes'> {
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
export const Timeline: React.FC<TimelineProps> = ({
  activeStep,
  children,
  id = undefined,
  className,
}: TimelineProps) => {
  const timelineClassName = clsx('denhaag-timeline', className);

  return (
    <MaterialStepper
      activeStep={activeStep}
      connector={<React.Fragment />}
      id={id}
      nonLinear
      orientation="vertical"
      className={timelineClassName}
    >
      {children}
    </MaterialStepper>
  );
};

export default Timeline;
