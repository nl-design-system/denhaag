import React from 'react'
import MaterialCardContent from '@material-ui/core/CardContent'

export interface CardContentProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const CardContent: React.FC<CardContentProps> = (
  props: CardContentProps
) => {
  return <MaterialCardContent {...props}>{props.children}</MaterialCardContent>
}

/**
 * Default export for CardContent
 */
export default CardContent
