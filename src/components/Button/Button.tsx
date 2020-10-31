import MaterialButton from "@material-ui/core/Button";
import React, { ReactNode } from "react";

export interface ButtonProps {
  /**
   * Simple click handler
   */
  onClick?: () => void;
  /**
   * Color for the component
   */
  color?: 'primary' | 'secondary' | 'default';
  /**
   * Size of the component
   */
  size?: 'small' | 'medium' | 'large'
   * Disables Button
   */
  disabled?: boolean;
  /** 
   * Button variant
   */
  variant?: 'outlined' | 'contained' | 'text';
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  color = "default",
  variant = "contained",
  onClick,
  size,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <MaterialButton
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </MaterialButton>
  )
}

/**
 * Default export for Button
 */
export default Button;
