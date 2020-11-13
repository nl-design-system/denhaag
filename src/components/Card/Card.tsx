import MaterialCard from '@material-ui/core/Card'
import React from 'react'
import { PaperProps } from 'nlds-react-components-paper'

export interface CardProps extends PaperProps {
  /**
   * If `true`, the card will use raised styling.
   */
  raised?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({
  raised = false,
  children,
  ...props
}) => {
  return (
    <MaterialCard raised={raised} {...props}>
      {children}
    </MaterialCard>
  )
}

/**
 * Default export for Card
 */
export default Card
