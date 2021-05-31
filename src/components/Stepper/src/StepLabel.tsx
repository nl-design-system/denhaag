import React from 'react';
import clsx from 'clsx';

import StepIcon, { StepIconProps } from './StepIcon';
import { StepperComponent } from './@types';

export interface StepLabelProps extends StepperComponent {
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
  icon?: number;

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
export const StepLabel: React.FC<StepLabelProps> = ({ active, completed, expanded, ...props }: StepLabelProps) => {
  const classes = clsx('denhaag-stepper__step-label', {
    'denhaag-stepper__step-label-active': active || expanded,
  });

  return (
    <div className={classes}>
      <StepIcon active={active} completed={completed} icon={props.icon} {...props.StepIconProps} />
      <p className="denhaag-stepper__step-label__text">{props.children}</p>
    </div>
  );
};

export default StepLabel;
