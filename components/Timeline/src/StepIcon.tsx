import React from 'react';
import clsx from 'clsx';
import SvgIcon, { CheckCircleIcon } from '@gemeente-denhaag/icons';

import { StepComponentProps } from './StepComponentProps';

export interface StepIconProps extends StepComponentProps {
  /**
   * The label displayed in the step icon.
   */
  icon?: string | number;
}

/**
 * Displays an icon in a Step component within a Stepper component.
 * @param props The properties of a StepIcon component.
 * @constructor Constructs an instance of StepIcon.
 */
export const StepIcon: React.FC<StepIconProps> = ({
  icon,
  active = false,
  completed = false,
  disabled = false,
  id = undefined,
}: StepIconProps) => {
  const textClasses = clsx('denhaag-timeline__step-icon-text', {
    'denhaag-timeline__step-icon-text--active': active,
  });

  // Exported from https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1908%3A9407
  const circleProps = {
    cx: 10,
    cy: 10,
    r: active ? 10 : 9.25,
    fill: active ? 'currentColor' : 'none',
    stroke: active ? 'none' : 'currentColor',
    strokeWidth: active ? 0 : 1.5,
  };

  const completedClassName = clsx('denhaag-timeline__step-icon', 'denhaag-timeline__step-icon--completed');

  if (completed) {
    return <CheckCircleIcon useDefaultClass={false} className={completedClassName} />;
  }

  const className = clsx('denhaag-timeline__step-icon', {
    'denhaag-timeline__step-icon--active': active,
    'denhaag-timeline__step-icon--disabled': disabled,
  });

  return (
    <SvgIcon fill={'currentColor'} useDefaultClass={false} id={id} viewBox="0 0 20 20" className={className}>
      <circle {...circleProps} />
      <text x="10" y="14" textAnchor="middle" className={textClasses}>
        {icon}
      </text>
    </SvgIcon>
  );
};

export default StepIcon;
