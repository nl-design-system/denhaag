import React from 'react'
import MaterialMobileStepper from '@material-ui/core/MobileStepper'
import { BaseChildrenProps } from '@gemeente-denhaag/baseprops/BaseProps'

export interface MobileStepperProps extends BaseChildrenProps {
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number

  /**
   * A back button element. For instance, it can be a Button or an IconButton.
   */
  backButton: React.ReactNode

  /**
   * Props applied to the LinearProgress element.
   */
  LinearProgressProps?: object

  /**
   * A next button element. For instance, it can be a Button or an IconButton.
   */
  nextButton: React.ReactNode

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
  return <MaterialMobileStepper {...props} />
}

export default MobileStepper
