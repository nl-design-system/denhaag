import React from 'react';
import { StylesProvider } from '@material-ui/core';
import { BaseClassesProps } from '@gemeente-denhaag/baseprops';
import SvgIcon, { SvgIconProps, CheckCircleIcon } from '@gemeente-denhaag/icons';
// import clsx from 'clsx';

export interface StepIconProps extends BaseClassesProps {
  /**
   * Whether this step is active.
   */
  active?: boolean;

  inactive?: boolean;

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed?: boolean;

  /**
   * Mark the step as failed.
   */
  error?: boolean;

  /**
   * The label displayed in the step icon.
   */
  icon: boolean;
}

/**
 * Displays an icon in a Step component within a Stepper component.
 * @param props The properties of a StepIcon component.
 * @constructor Constructs an instance of StepIcon.
 */
export const StepIcon: React.FC<StepIconProps> = ({
  active = false,
  inactive = true,
  completed = false,
  icon,
}: StepIconProps) => {
  let color: SvgIconProps['color'];
  if (active) {
    color = 'primary';
  } else if (completed) {
    color = 'secondary';
  } else if (inactive) {
    color = 'disabled';
  }

  // const SvgIconclasses = clsx('denhaag-stepper__step-icon', {
  //   'denhaag-stepper__step-icon--active': active,
  //   'denhaag-stepper__step-icon--inactive': inactive,
  //   'denhaag-stepper__step-icon--completed': completed,
  // });

  // const textClasses = clsx('denhaag-stepper__step-icon__text', {
  //   'denhaag-stepper__step-icon__text--active': active,
  //   'denhaag-stepper__step-icon__text--inactive': inactive,
  //   'denhaag-stepper__step-icon__text--completed': completed,
  // });

  if (completed) {
    return (
      <StylesProvider injectFirst>
        <CheckCircleIcon classes={stepIconClasses} color={color} />
      </StylesProvider>
    );
  }

  // Exported from https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1908%3A9407
  return (
    // <span className={SvgIconclasses}>{icon}</span>
    <StylesProvider injectFirst>
      <SvgIcon viewBox="0 0 20 20" classes={stepIconClasses} color={color}>
        <circle cx="10" cy="10" r="10" />
        <text x="10" y="14" textAnchor="middle">
          {icon}
        </text>
      </SvgIcon>
    </StylesProvider>
  );
};

export default StepIcon;
