import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { StylesProvider } from "@material-ui/core/styles";
import BaseProps from "@gemeente-denhaag/baseprops";
import  "./Card.module.css";
import "./mui-override.module.css";
import "@gemeente-denhaag/basestyles";
import { cardClasses, cardCaseClasses } from  "./bem-mapping";

export interface CardProps extends BaseProps {
  /**
   * If `true`, the card will use raised styling.
   */
  raised?: boolean;

  /**
   * Determines the variant of the card
   * Variant can be either `basic` or `case`
   */
  variant?: "basic" | "case";
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  const muiVariant = props.raised;
  let classes;

  switch (props.variant) {
    case "basic":
      classes = cardClasses;
      break;
    case "case":
      classes = cardCaseClasses;
      break;
  }

  return (
    <StylesProvider injectFirst>
      <MaterialCard classes={classes} {...muiVariant}>{props.children}</MaterialCard>
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
