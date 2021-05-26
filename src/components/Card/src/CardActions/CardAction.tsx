import React from "react";
import MaterialCardActions from "@material-ui/core/CardActions";
import BaseProps from "@gemeente-denhaag/baseprops";
import "./card-actions.css";
import "./mui-override.css";
import { StylesProvider } from "@material-ui/core/styles";
import { cardActionClasses } from "./bem-mapping";

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
  return (
    <StylesProvider injectFirst>
      <MaterialCardActions classes={cardActionClasses} {...props}>{props.children}</MaterialCardActions>
    </StylesProvider>
  );
}

/**
 * Default export for CardActions
 */
export default CardActions;
