import { Button as MaterialButton } from "@material-ui/core";
import React, {ReactNode} from "react";

export default function () {
    return <MaterialButton/>;
}

export type ButtonProps = {
  /**
   * Simple click handler
   */
  onClick?: () => void;

  /**
   * Color for the component
   */
  color: "primary" | "secondary" | "default" | undefined;

  /** 
   * Button variant
   */
  variant: "outlined" | "contained" | "text" | undefined;
  children: ReactNode;
};

/**
 * Primary UI component for user interaction
 */ 

export const Button = ({
  color,
  variant,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <MaterialButton onClick={onClick} variant={variant} color={color} {...props}>
      {children}
    </MaterialButton>
  )
}
