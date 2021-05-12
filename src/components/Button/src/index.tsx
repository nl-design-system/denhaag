import MaterialButton, { ButtonTypeMap } from '@material-ui/core/Button';
import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import { StylesProvider } from '@material-ui/core';
import { classes } from './bem-mapping';
import '@gemeente-denhaag/basestyles';
import './mui-override.module.css';
import './button.module.css';

export interface ButtonProps extends BaseProps {
  /**
   * Simple click handler
   */
  onClick?: () => void;
  /**
   * The url to link to when the button is clicked.
   * If defined, an a element will be used as the root node.
   */
  href?: string;

  /**
   * Size of the component
   */
  size?: 'medium' | 'large';

  /**
   * Disables Button
   */
  disabled?: boolean;

  /**
   * Button variant
   */
  variant?: 'primary-action' | 'secondary-action';

  /**
   * HTML type prop
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Icon placed at the start of the button
   */
  startIcon?: React.ReactNode;

  /**
   * Icon placed at the end of the button
   */
  endIcon?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const sizeClass = `denhaag-button--${props.size ?? 'medium'}`;
  let muiVariant: ButtonTypeMap['props']['variant'] = 'contained';

  switch (props.variant) {
    case 'primary-action':
      muiVariant = 'contained';
      break;
    case 'secondary-action':
      muiVariant = 'outlined';
      break;
  }

  return (
    <StylesProvider injectFirst>
      <MaterialButton {...props} classes={classes} className={sizeClass} variant={muiVariant} disableRipple>
        {props.children}
      </MaterialButton>
    </StylesProvider>
  );
};

/**
 * Default export for Button
 */
export default Button;
