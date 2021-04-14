import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { StylesProvider } from "@material-ui/core/styles";
import { BasePaperProps } from "@gemeente-denhaag/paper/BasePaperProps";
import './card.module.css';
import './mui-override.module.css';
import { classes } from './bem-mapping';

export interface CardProps extends BasePaperProps {
  /**
   * If `true`, the card will use raised styling.
   */
  raised?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <StylesProvider injectFirst>
      <MaterialCard classes={classes} {...props}>{props.children}</MaterialCard>;
    </StylesProvider>
  )
};

/**
 * Default export for Card
 */
export default Card;
export * from "@gemeente-denhaag/cardactions";
export * from "@gemeente-denhaag/cardcontent";
export * from "@gemeente-denhaag/cardheader";
export * from "@gemeente-denhaag/paper";
