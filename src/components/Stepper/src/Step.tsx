import React, { useEffect, useState, KeyboardEventHandler } from 'react';
import MaterialStep from '@material-ui/core/Step';

import BaseProps from '@gemeente-denhaag/baseprops';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

import { StepIcon, StepContent, StepLabel } from '.';
import { stepClasses, stepLabelIconClasses } from './styles/bem-mapping';

export interface StepProps extends BaseProps {
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

  /**
   * Tab index of the root step element.
   */
  tabIndex?: number;
}

/**
 * Represents a single Step in a Stepper component.
 * @param props The properties of a Step component.
 * @constructor Constructs an instance of Step.
 */
export const Step: React.FC<StepProps> = ({
  label,
  description,
  active = false,
  tabIndex = 0,
  ...props
}: StepProps) => {
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

  // Toggle when element is focussed and 'Enter' is pressed.
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      toggle();
    }
  };

  return (
    <MaterialStep
      onClick={toggle}
      expanded={isExpanded}
      active={active}
      classes={stepClasses}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <StepLabel StepIconComponent={StepIcon}>
        {label}
        {hasDescription && !active ? (
          isExpanded ? (
            <ChevronUpIcon classes={stepLabelIconClasses} />
          ) : (
            <ChevronDownIcon classes={stepLabelIconClasses} />
          )
        ) : (
          ''
        )}
      </StepLabel>
      {hasDescription ? <StepContent>{description}</StepContent> : ''}
    </MaterialStep>
  );
};

export default Step;
