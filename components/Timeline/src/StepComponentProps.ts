import { HTMLAttributes } from 'react';

export interface StepComponentProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sets the step as active.
   */
  active?: boolean;

  /**
   * Mark the step as completed.
   */
  completed?: boolean;

  /**
   * Mark the step as disabled.
   */
  disabled?: boolean;

  /**
   * If the step content is expanded or not.
   */
  expanded?: boolean;
}
