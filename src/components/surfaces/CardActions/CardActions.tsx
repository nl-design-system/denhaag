import React from 'react'
import MaterialCardActions from '@material-ui/core/CardActions'

export interface CardActionProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const CardActions: React.FC<CardActionProps> = (
  props: CardActionProps
) => {
  return <MaterialCardActions {...props}>{props.children}</MaterialCardActions>
}

/**
 * Default export for CardActions
 */
export default CardActions
