import MaterialPaper from '@material-ui/core/Paper'
import React from 'react'

export interface PaperProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation?: number
  /**
   * If `true`, rounded corners are disabled.
   */
  square?: boolean
  /**
   * The variant to use.
   */
  variant?: 'elevation' | 'outlined'
}

/**
 * Primary UI component for user interaction
 */
export const Paper: React.FC<PaperProps> = ({
  component = 'div',
  elevation = 1,
  square = false,
  variant = 'elevation',
  children,
  ...props
}) => {
  return (
    <MaterialPaper
      component={component}
      elevation={elevation}
      square={square}
      variant={variant}
      {...props}
    >
      {children}
    </MaterialPaper>
  )
}

/**
 * Default export for Paper
 */
export default Paper
