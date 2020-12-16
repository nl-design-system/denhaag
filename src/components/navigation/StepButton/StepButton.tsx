import React from 'react'
import MaterialStepButton from '@material-ui/core/StepButton'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface StepButtonProps extends ComponentBaseProps {
  /**
   * The icon displayed by the step label.
   */
  icon?: React.ReactNode

  /**
   * The optional node to display.
   */
  optional?: React.ReactNode
}

/**
 * Represents a button in a Stepper component.
 * @param props The properties of a StepButton component.
 * @constructor Constructs an instance of StepButton.
 */
export const StepButton: React.FC<StepButtonProps> = (
  props: StepButtonProps
) => {
  return <MaterialStepButton {...props}>{props.children}</MaterialStepButton>
}

export default StepButton
