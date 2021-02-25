import MaterialButton from '@material-ui/core/Button'
import { StylesProvider } from '@material-ui/core/styles'
import React from 'react'
import BaseProps from '../../BaseProps/BaseProps'
import './button.module.css'
import { bem } from './bem-mapping'

export interface ButtonProps extends BaseProps {
  /**
   * Simple click handler
   */
  onClick?: () => void

  /**
   * The url to link to when the button is clicked.
   * If defined, an a element will be used as the root node.
   */
  href?: string

  /**
   * Disables Button
   */
  disabled?: boolean

  /**
   * Button variant
   */
  variant?: 'outlined' | 'contained'
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StylesProvider injectFirst>
      <MaterialButton classes={bem} disableRipple {...props}>
        {props.children}
      </MaterialButton>
    </StylesProvider>
  )
}

/**
 * Default export for Button
 */
export default Button
