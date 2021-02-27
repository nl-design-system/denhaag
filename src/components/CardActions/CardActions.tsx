import React from "react";
import MaterialCardActions from "@material-ui/core/CardActions";
import BaseProps from "@gemeente-denhaag/baseprops";

export interface CardActionProps extends BaseProps {
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const CardActions: React.FC<CardActionProps> = (props: CardActionProps) => {
  return <MaterialCardActions {...props}>{props.children}</MaterialCardActions>;
};

/**
 * Default export for CardActions
 */
export default CardActions;
