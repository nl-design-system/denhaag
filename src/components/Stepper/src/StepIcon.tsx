import React from 'react';
import { BaseClassesProps } from '@gemeente-denhaag/baseprops';
import SvgIcon, { CheckCircleIcon } from '@gemeente-denhaag/icons';

export interface StepIconProps extends BaseClassesProps {
  /**
   * Whether this step is active.
   */
  active?: boolean;

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
export const StepIcon: React.FC<StepIconProps> = ({ completed, icon }: StepIconProps) => {
  if (completed) {
    return <CheckCircleIcon />;
  }

  // Exported from https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=1908%3A9407
  return (
    <SvgIcon viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" />
      <text x="10" y="14" textAnchor="middle">
        {icon}
      </text>
    </SvgIcon>
  );
};

export default StepIcon;
