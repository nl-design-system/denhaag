import React from 'react';
import clsx from 'clsx';

import StepIcon, { StepIconProps } from './StepIcon';
import { TimelineComponent } from './types';

export interface StepLabelProps extends TimelineComponent {
  /**
   * The label displayed in the step icon.
   */
  icon?: number;

  /**
   * The component to render in place of the StepIcon.
   */
  StepIconComponent?: React.ReactElement;

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
export const StepLabel: React.FC<StepLabelProps> = (props: StepLabelProps) => {
  let StepIconComponent: React.ReactElement;
  if (props.StepIconComponent === undefined) {
    StepIconComponent = (
      <StepIcon
        active={props.active}
        completed={props.completed}
        disabled={props.disabled}
        icon={props.icon}
        {...props.StepIconProps}
      />
    );
  } else {
    StepIconComponent = props.StepIconComponent;
    StepIconComponent.props = { ...StepIconComponent.props, ...props.StepIconProps };
  }

  const classes = clsx('denhaag-timeline__step-label', {
    'denhaag-timeline__step-label--active': props.active || props.expanded,
    'denhaag-timeline__step-label--disabled': props.disabled,
  });

  return (
    <div className={classes}>
      {StepIconComponent}
      <p className="denhaag-timeline__step-label__text">{props.children}</p>
    </div>
  );
};

export default StepLabel;
