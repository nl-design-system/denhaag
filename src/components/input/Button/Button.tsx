import MaterialButton from '@material-ui/core/Button'
import { StylesProvider } from '@material-ui/core/styles'
import React from 'react'
import BaseProps from '../../BaseProps/BaseProps'
import './button.module.css'
import './mui-override.module.css'
import { bem } from './bem-mapping'

export interface ButtonProps extends BaseProps {
  /**
   * Simple click handler
   */
  onClick?: () => void

  /**
   * Disables Button
   */
  disabled?: boolean

  /**
   * Button variant
   */
  type?: 'primary-action' | 'secondary-action'
}

type ButtonVariant = 'outlined' | 'contained'

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { onClick, disabled, type } = props

  let variant: ButtonVariant

  switch (type) {
    case 'secondary-action':
      variant = 'outlined'
      break
    case 'primary-action':
    default:
      variant = 'contained'
  }

  return (
    <StylesProvider injectFirst>
      <MaterialButton classes={bem} onClick={onClick} variant={variant} disabled={disabled} disableRipple>
        {props.children}
      </MaterialButton>
    </StylesProvider>
  )
}

/**
 * Default export for Button
 */
export default Button
