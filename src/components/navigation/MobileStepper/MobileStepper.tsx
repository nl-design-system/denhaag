import React, { ReactElement } from 'react'
import MaterialMobileStepper from '@material-ui/core/MobileStepper'

export interface MobileStepperProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object

  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number

  /**
   * A back button element. For instance, it can be a Button or an IconButton.
   */
  backButton: ReactElement

  /**
   * Props applied to the LinearProgress element.
   */
  LinearProgressProps?: object

  /**
   * A next button element. For instance, it can be a Button or an IconButton.
   */
  nextButton: ReactElement

  /**
   * Set the positioning type.
   */
  position?: 'bottom' | 'static' | 'top'

  /**
   * The total steps.
   */
  steps: number

  /**
   * The variant to use.
   */
  variant?: 'dots' | 'progress' | 'text'
}

/**
 * Implements a compact Stepper suitable for mobile devices.
 * @param props The properties of a MobileStepper component.
 * @constructor Constructs an instance of MobileStepper.
 */
export const MobileStepper: React.FC<MobileStepperProps> = (
  props: MobileStepperProps
) => {
  return (
    <MaterialMobileStepper
      classes={props.classes}
      backButton={props.backButton}
      nextButton={props.nextButton}
      steps={props.steps}
      activeStep={props.activeStep ?? 0}
      LinearProgressProps={props.LinearProgressProps}
      position={props.position ?? 'bottom'}
      variant={props.variant ?? 'dots'}
    />
  )
}

export default MobileStepper
