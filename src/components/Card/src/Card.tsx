import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { BasePaperProps } from "./BasePaperProps";

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
  return <MaterialCard {...props}>{props.children}</MaterialCard>;
};

/**
 * Default export for Card
 */
export default Card;
