import React from 'react'
import MaterialStepConnector from '@material-ui/core/StepConnector'

export interface StepConnectorProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object
}

/**
 * Represents a connector between two Step components in a Stepper component.
 * @param props The properties of a StepConnector component.
 * @constructor Constructs an instance of StepConnector.
 */
export const StepConnector: React.FC<StepConnectorProps> = (
  props: StepConnectorProps
) => {
  return <MaterialStepConnector classes={props.classes} />
}

export default StepConnector
