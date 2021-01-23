import MaterialButton from '@material-ui/core/Button'
import React from 'react'
import BaseProps from '../../BaseProps/BaseProps'
import './button-design-tokens.module.css'
// import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core";

export interface ButtonProps extends BaseProps {
  /**
   * Simple click handler
   */
  onClick?: () => void

  /**
   * Color for the component
   */
  color?: 'primary' | 'secondary' | 'default'

  /**
   * The url to link to when the button is clicked.
   * If defined, an a element will be used as the root node.
   */
  href?: string

  /**
   * Size of the component
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * Disables Button
   */
  disabled?: boolean

  /**
   * Button variant
   */
  variant?: 'outlined' | 'contained' | 'text'
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (
  props: ButtonProps
) => {
  return (
      <MaterialButton {...props}>{props.children}</MaterialButton>
  )
}

/**
 * Default export for Button
 */
export default Button
