import React, { useEffect, useState } from 'react';
import MaterialStep from '@material-ui/core/Step';

import BaseProps from '@gemeente-denhaag/baseprops';
import { Typography } from '@gemeente-denhaag/typography';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

import { StepIcon, StepContent, StepLabel } from '.';
import { stepClasses } from './styles/bem-mapping';

export interface StepProps extends BaseProps {
  label: string;
  description?: string;
  /**
   * Describes the information of the step.
   */
  label: string;
  /**
   * Additional information about the step.
   */
  description?: string;
  /**
   * Sets the step as active.
   * Is passed to child components.
   */
  active?: boolean;

  /**
   * Mark the step as completed.
   * Is passed to child components.
   */
  completed?: boolean;

  /**
   * Mark the step as disabled,
   * will also disable the button if StepButton is a child of Step.
   * Is passed to child components.
   */
  disabled?: boolean;

  /**
   * Expand the step.
   */
  expanded?: boolean;
}

/**
 * Represents a single Step in a Stepper component.
 * @param props The properties of a Step component.
 * @constructor Constructs an instance of Step.
 */
export const Step: React.FC<StepProps> = ({ label, description, active = false, ...props }: StepProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasDescription = description !== undefined;

  const toggle = () => {
    if (hasDescription) {
      setIsExpanded((prevState) => !prevState);
    }
  };

  // If active has been updated, this indicates that the user is on the next
  // step, then we want to collapse the StepContent
  useEffect(() => {
    setIsExpanded(false);
  }, [active]);

  return (
    <MaterialStep onClick={toggle} expanded={isExpanded} active={active} classes={stepClasses} {...props}>
      <StepLabel StepIconComponent={StepIcon}>
        {label}
        {hasDescription && !active ? isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon /> : ''}
      </StepLabel>
      <StepContent>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </StepContent>
    </MaterialStep>
  );
};

export default Step;
