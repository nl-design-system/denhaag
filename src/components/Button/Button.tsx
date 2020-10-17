import { Button as MaterialButton } from "@material-ui/core";
import React, {ReactNode} from "react";

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
   * Disables Button
   */
  disabled?: boolean;
  /** 
   * Button variant
   */
  variant?: 'outlined' | 'contained' | 'text';
  children: ReactNode;
}

//export { Button };

/**
 * Primary UI component for user interaction
 */ 
export const Button: React.FC<ButtonProps> = ({
  color,
  variant,
  onClick,
  disabled,
  children,
  ...props
}) => {
  return (
    <MaterialButton onClick={onClick} variant={variant} color={color} disabled = {disabled} {...props}>
      {children}
    </MaterialButton>
  );
};