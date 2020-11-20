import React, { ReactElement } from 'react'
import MaterialStepper from '@material-ui/core/Stepper'

export interface StepperProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object

  /**
   * The content of the component
   */
  children: ReactElement

  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number

  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel?: boolean

  /**
   * An element to be placed between each step.
   */
  connector?: ReactElement

  /**
   * If set the Stepper will not assist in controlling steps for linear flow.
   */
  nonLinear?: boolean

  /**
   * The stepper orientation (layout flow direction).
   */
  orientation?: 'horizontal' | 'vertical'
}

/**
 * A Stepper conveys progress through numbered steps.
 * @param props The properties of a Stepper component.
 * @constructor Constructs an instance of Stepper.
 */
export const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  return (
    <MaterialStepper
      classes={props.classes}
      activeStep={props.activeStep ?? 0}
      alternativeLabel={props.alternativeLabel ?? false}
      connector={props.connector}
      nonLinear={props.nonLinear ?? false}
      orientation={props.orientation ?? 'horizontal'}
    >
      {props.children}
    </MaterialStepper>
  )
}

export default Stepper
