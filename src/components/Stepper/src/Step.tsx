import React, { useState } from 'react';
import MaterialStep from '@material-ui/core/Step';
import BaseProps from '@gemeente-denhaag/baseprops';
import { StepContent, StepLabel } from '@material-ui/core';
import { Typography } from '@gemeente-denhaag/typography';
import { ChevronDownIcon, ChevronupIcon } from '@gemeente-denhaag/icons';

export interface StepProps extends BaseProps {
  label: string;
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
export const Step: React.FC<StepProps> = ({ label, description, ...props }: StepProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const hasDescription = description !== undefined;

  const toggle = () => {
    if (hasDescription && props.active) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <MaterialStep onClick={toggle} {...props}>
      <StepLabel>
        {label}
        {hasDescription ? isCollapsed ? <ChevronDownIcon /> : <ChevronupIcon /> : ''}
      </StepLabel>
      {hasDescription ? (
        isCollapsed ? (
          ''
        ) : (
          <StepContent>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
          </StepContent>
        )
      ) : (
        ''
      )}
    </MaterialStep>
  );
};

export default Step;
