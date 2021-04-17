import React from "react";
import MaterialCardContent from "@material-ui/core/CardContent";
import BaseProps from "@gemeente-denhaag/baseprops";

export interface CardContentProps extends BaseProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const CardContent: React.FC<CardContentProps> = (props: CardContentProps) => {
  return <MaterialCardContent {...props}>{props.children}</MaterialCardContent>;
};

/**
 * Default export for CardContent
 */
export default CardContent;
