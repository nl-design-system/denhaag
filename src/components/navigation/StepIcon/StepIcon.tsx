import React from 'react'
import MaterialStepIcon from '@material-ui/core/StepIcon'
import { ComponentBaseClassesProps } from '../../ComponentBaseProps/ComponentBaseProps'

export interface StepIconProps extends ComponentBaseClassesProps {
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
  icon: React.ReactNode
}

/**
 * Displays an icon in a Step component within a Stepper component.
 * @param props The properties of a StepIcon component.
 * @constructor Constructs an instance of StepIcon.
 */
export const StepIcon: React.FC<StepIconProps> = (props: StepIconProps) => {
  return <MaterialStepIcon {...props} />
}

export default StepIcon
