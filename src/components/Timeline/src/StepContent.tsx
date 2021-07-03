import React from 'react';
import { TransitionProps } from '@material-ui/core/transitions';
import { StepContent as MaterialStepContent } from '@material-ui/core';

import { StepComponentProps } from './StepComponentProps';
import { stepContentClass } from './bem-mapping';

export interface StepContentProps extends StepComponentProps {
  /**
   * The component used for the transition.
   */
  TransitionComponent?: React.ComponentType<TransitionProps>;

  /**
   * Adjust the duration of the content expand transition.
   * Passed as a prop to the transition component.
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration?:
    | 'auto'
    | number
    | {
        appear?: number;
        enter?: number;
        exit?: number;
      };

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: Record<string, unknown>;
}

/**
 * Represents the content of a Step component in a Stepper component.
 * @param props The properties of a StepContent component.
 * @constructor Constructs an instance of StepContent.
 */
export const StepContent: React.FC<StepContentProps> = ({
  TransitionComponent,
  TransitionProps,
  transitionDuration,
  children,
  id = undefined,
  ...props
}: StepContentProps) => {
  return (
    <MaterialStepContent
      id={id}
      className={stepContentClass}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      transitionDuration={transitionDuration}
      {...props}
    >
      {children}
    </MaterialStepContent>
  );
};

export default StepContent;
