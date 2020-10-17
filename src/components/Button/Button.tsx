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
  color: "primary" | "secondary" | "default" | undefined;
  /**
   * Disables Button
   */
  disabled: true | undefined;
  /** 
   * Button variant
   */
  variant: "outlined" | "contained" | "text" | undefined;
  children: ReactNode;
}

export { Button };

/**
 * Primary UI component for user interaction
 */ 
const Button:React.FC<ButtonProps> = ({
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