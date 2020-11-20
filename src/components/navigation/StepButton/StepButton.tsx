import React, { ReactElement } from 'react'
import MaterialStepButton from '@material-ui/core/StepButton'

export interface StepButtonProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object

  /**
   * The content of the component
   */
  children: ReactElement

  /**
   * The icon displayed by the step label.
   */
  icon: ReactElement

  /**
   * The optional node to display.
   */
  optional?: ReactElement
}

/**
 * Represents a button in a Stepper component.
 * @param props The properties of a StepButton component.
 * @constructor Constructs an instance of StepButton.
 */
export const StepButton: React.FC<StepButtonProps> = (
  props: StepButtonProps
) => {
  return (
    <MaterialStepButton
      classes={props.classes}
      icon={props.icon}
      optional={props.optional}
    >
      {props.children}
    </MaterialStepButton>
  )
}

export default StepButton
