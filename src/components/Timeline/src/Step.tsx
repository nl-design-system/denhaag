import React, { useEffect, useState, KeyboardEventHandler } from 'react';
import MaterialStep from '@material-ui/core/Step';

import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

import { StepIcon, StepContent, StepLabel } from '.';
import { stepClasses, stepLabelIconClasses } from './bem-mapping';
import { TimelineComponent } from './@types';

export interface StepProps extends TimelineComponent {
  /**
   * Describes the information of the step.
   */
  label: string;
  /**
   * Additional information about the step.
   */
  description?: string;
}

/**
 * Represents a single Step in a Stepper component.
 * @param props The properties of a Step component.
 * @constructor Constructs an instance of Step.
 */
export const Step: React.FC<StepProps> = ({
  active = false,
  completed,
  description,
  label,
  tabIndex = 0,
  ...props
}: StepProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasDescription = description !== undefined;

  const toggle = () => {
    if (hasDescription && completed) {
      setIsExpanded((prevState) => !prevState);
    }
  };

  // If active has been updated, this indicates that the user is on the next
  // step, then we want to collapse the StepContent
  useEffect(() => {
    setIsExpanded(false);
  }, [active]);

  // Toggle when element is focussed and 'Enter' is pressed.
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      toggle();
    }
  };

  let descriptionElement: string | React.ReactElement = '';
  if (hasDescription) {
    descriptionElement = <StepContent>{description}</StepContent>;
  }

  let iconElement: string | React.ReactElement = '';
  if (hasDescription && completed) {
    if (isExpanded) {
      iconElement = <ChevronUpIcon classes={stepLabelIconClasses} />;
    } else {
      iconElement = <ChevronDownIcon classes={stepLabelIconClasses} />;
    }
  }

  return (
    <MaterialStep
      active={active}
      classes={stepClasses}
      completed={completed}
      expanded={isExpanded}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      {...props}
    >
      <StepLabel StepIconComponent={StepIcon}>
        {label}
        {iconElement}
      </StepLabel>
      {descriptionElement}
    </MaterialStep>
  );
};

export default Step;
