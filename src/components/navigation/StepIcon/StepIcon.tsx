import React, { ReactElement } from 'react'
import MaterialStepIcon from '@material-ui/core/StepIcon'

export interface StepIconProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object

  /**
   * Whether this step is active.
   */
  active?: boolean

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed?: boolean

  /**
   * Mark the step as failed.
   */
  error?: boolean

  /**
   * The label displayed in the step icon.
   */
  icon: ReactElement
}

/**
 * Displays an icon in a Step component within a Stepper component.
 * @param props The properties of a StepIcon component.
 * @constructor Constructs an instance of StepIcon.
 */
export const StepIcon: React.FC<StepIconProps> = (props: StepIconProps) => {
  return (
    <MaterialStepIcon
      classes={props.classes}
      icon={props.icon}
      active={props.active ?? false}
      completed={props.completed ?? false}
      error={props.error ?? false}
    />
  )
}

export default StepIcon
