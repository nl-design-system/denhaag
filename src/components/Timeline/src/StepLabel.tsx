import React from 'react';
import clsx from 'clsx';

import StepIcon, { StepIconProps } from './StepIcon';
import { StepComponentProps } from './StepComponentProps';

export interface StepLabelProps extends StepComponentProps {
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
export const StepLabel: React.FC<StepLabelProps> = ({
  StepIconComponent,
  StepIconProps,
  icon,
  children,
  active = false,
  completed = false,
  disabled = false,
  expanded = false,
}: StepLabelProps) => {
  let UpdatedStepIconComponent: React.ReactElement;
  if (StepIconComponent === undefined) {
    UpdatedStepIconComponent = (
      <StepIcon active={active} completed={completed} disabled={disabled} icon={icon} {...StepIconProps} />
    );
  } else {
    UpdatedStepIconComponent = StepIconComponent;
    UpdatedStepIconComponent.props = { ...StepIconComponent.props, ...StepIconProps };
  }

  const classes = clsx('denhaag-timeline__step-label', {
    'denhaag-timeline__step-label--active': active || expanded,
    'denhaag-timeline__step-label--disabled': disabled,
    'denhaag-timeline__step-label--completed': completed,
  });

  return (
    <div className={classes}>
      {UpdatedStepIconComponent}
      <p className="denhaag-timeline__step-label-text">{children}</p>
    </div>
  );
};

export default StepLabel;
