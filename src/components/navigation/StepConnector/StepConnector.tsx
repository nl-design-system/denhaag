import React from 'react'
import MaterialStepConnector from '@material-ui/core/StepConnector'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

/**
 * Represents a connector between two Step components in a Stepper component.
 * @param props The properties of a StepConnector component.
 * @constructor Constructs an instance of StepConnector.
 */
export const StepConnector: React.FC<ComponentBaseProps> = (
  props: ComponentBaseProps
) => {
  return <MaterialStepConnector {...props} />
}

export default StepConnector
