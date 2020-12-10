import React from 'react'
import MaterialStepContent from '@material-ui/core/StepContent'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface StepContentProps extends ComponentBaseProps {

  /**
   * The component used for the transition.
   */
  TransitionComponent?: any

  /**
   * Adjust the duration of the content expand transition.
   * Passed as a prop to the transition component.
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration?:
    | 'auto'
    | number
    | {
        appear?: number
        enter?: number
        exit?: number
      }

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: object
}

/**
 * Represents the content of a Step component in a Stepper component.
 * @param props The properties of a StepContent component.
 * @constructor Constructs an instance of StepContent.
 */
export const StepContent: React.FC<StepContentProps> = (
  props: StepContentProps
) => {
  return <MaterialStepContent {...props}>{props.children}</MaterialStepContent>
}

export default StepContent
