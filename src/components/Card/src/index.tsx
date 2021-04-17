import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { BasePaperProps } from "@gemeente-denhaag/paper";

export interface CardProps extends BasePaperProps {
  /**
   * If `true`, the card will use raised styling.
   */
  raised?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Card: React.FC<CardProps> = (props: CardProps) => {
  return <MaterialCard {...props}>{props.children}</MaterialCard>;
};

/**
 * Default export for Card
 */
export default Card;
export * from "@gemeente-denhaag/cardactions";
export * from "@gemeente-denhaag/cardcontent";
export * from "@gemeente-denhaag/cardheader";
export * from "@gemeente-denhaag/paper";
