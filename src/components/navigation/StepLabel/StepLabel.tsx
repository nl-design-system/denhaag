import React, { ElementType, ReactElement } from 'react'
import MaterialStepLabel from '@material-ui/core/StepLabel'

export interface StepLabelProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object

  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: ReactElement

  /**
   * Mark the step as disabled, will also disable the button if StepLabelButton is a child of StepLabel.
   * Is passed to child components.
   */
  disabled?: boolean

  /**
   * The optional node to display.
   */
  optional?: ReactElement

  /**
   * Mark the step as failed.
   */
  error?: boolean

  /**
   * The label displayed in the step icon.
   */
  icon?: ReactElement

  /**
   * The component to render in place of the StepIcon.
   */
  StepIconComponent?: ElementType

  /**
   * Props applied to the StepIcon element.
   */
  StepIconProps?: object
}

/**
 * Shows a label in a Step component within a Stepper component.
 * @param props The properties of a StepLabel component.
 * @constructor Constructs an instance of StepLabel.
 */
export const StepLabel: React.FC<StepLabelProps> = (props: StepLabelProps) => {
  return (
    <MaterialStepLabel
      classes={props.classes}
      disabled={props.disabled ?? false}
      optional={props.optional}
      error={props.error ?? false}
      icon={props.icon}
      StepIconComponent={props.StepIconComponent}
      StepIconProps={props.StepIconProps}
    />
  )
}

export default StepLabel
