import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { Step as MaterialStep } from '@material-ui/core';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

import { StepContent, StepLabel } from './index';
import { StepComponentProps } from './StepComponentProps';
import clsx from 'clsx';

export interface TimelineStepProps extends StepComponentProps {
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
export const TimelineStep: React.FC<TimelineStepProps> = ({
  label,
  description,
  active = false,
  completed = false,
  disabled = false,
  id = undefined,
  tabIndex = 0,
  ...props
}: TimelineStepProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasDescription = description !== undefined;

  if (active && disabled) {
    throw new Error('Step cannot be active and disabled at the same time.');
  }

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
  let role = undefined;
  if (hasDescription && completed) {
    role = 'button';
    if (isExpanded) {
      iconElement = <ChevronUpIcon useDefaultClass={false} className={'denhaag-timeline__step-collapse-icon'} />;
    } else {
      iconElement = <ChevronDownIcon useDefaultClass={false} className={'denhaag-timeline__step-collapse-icon'} />;
    }
  }

  const className = clsx('denhaag-timeline__step', props.className);

  return (
    <MaterialStep
      active={active}
      aria-expanded={isExpanded}
      completed={completed}
      disabled={disabled}
      expanded={isExpanded}
      id={id}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={tabIndex}
      {...props}
      className={className}
    >
      <StepLabel>
        {label}
        {iconElement}
      </StepLabel>
      {descriptionElement}
    </MaterialStep>
  );
};

export default TimelineStep;
