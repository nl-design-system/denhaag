import BaseProps from '@gemeente-denhaag/baseprops';

export interface StepperComponent extends BaseProps {
  /**
   * Sets the step as active.
   */
  active?: boolean;

  /**
   * Mark the step as completed.
   */
  completed?: boolean;

  /**
   * Mark the step as disabled, will also disable the button if StepButton is a
   * child of Step.
   */
  disabled?: boolean;

  /**
   * If the step content is expanded or not.
   */
  expanded?: boolean;
}
