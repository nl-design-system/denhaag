import React from 'react';
import { StylesProvider } from '@material-ui/core';
import SvgIcon, { SvgIconProps, CheckCircleIcon } from '@gemeente-denhaag/icons';
import { stepIconClasses } from './bem-mapping';
import clsx from 'clsx';
import { TimelineComponent } from './types';

export interface StepIconProps extends TimelineComponent {
  /**
   * The label displayed in the step icon.
   */
  icon?: number;
}

/**
 * Displays an icon in a Step component within a Stepper component.
 * @param props The properties of a StepIcon component.
 * @constructor Constructs an instance of StepIcon.
 */
export const StepIcon: React.FC<StepIconProps> = (props: StepIconProps) => {
  let color: SvgIconProps['color'] = 'primary';
  if (props.disabled) {
    color = 'disabled';
  } else if (props.active) {
    color = 'action';
  } else if (props.completed) {
    color = 'secondary';
  }

  const textClasses = clsx('denhaag-timeline__step-icon__text', {
    'denhaag-timeline__step-icon__text--active': props.active,
    'denhaag-timeline__step-icon__text--completed': props.completed,
  });

  // Exported from https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1908%3A9407
  const circleProps = {
    cx: 10,
    cy: 10,
    r: props.active ? 10 : 9.25,
    fill: props.active ? 'currentColor' : 'none',
    stroke: props.active ? 'none' : 'currentColor',
    strokeWidth: props.active ? 0 : 1.5,
  };

  if (props.completed) {
    return (
      <StylesProvider injectFirst>
        <CheckCircleIcon classes={stepIconClasses} color={color} />
      </StylesProvider>
    );
  }

  return (
    <StylesProvider injectFirst>
      <SvgIcon viewBox="0 0 20 20" classes={stepIconClasses} color={color}>
        <circle {...circleProps} />
        <text x="10" y="14" textAnchor="middle" className={textClasses}>
          {props.icon}
        </text>
      </SvgIcon>
    </StylesProvider>
  );
};

export default StepIcon;
