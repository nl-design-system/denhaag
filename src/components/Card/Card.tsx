import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { StylesProvider } from "@material-ui/core/styles";
import ArrowForward from "@material-ui/icons/ArrowForward";
import BaseProps from "@gemeente-denhaag/baseprops";
import  "./Card.module.css";
import "./mui-override.module.css";
import "@gemeente-denhaag/basestyles";
import { Typography } from "@gemeente-denhaag/typography";
import { IconButton } from "@gemeente-denhaag/iconbutton";
import { cardClasses, cardCaseClasses } from  "./bem-mapping";
import { CardHeader ,
          CardContent,
          CardActions } from "@gemeente-denhaag/surfaces";

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
    default:
      classes = cardClasses;
      break;
  }

  return (
    <StylesProvider injectFirst>
      <MaterialCard classes={classes} {...muiVariant}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
          </Typography>
          <CardActions>
            <IconButton aria-label="ArrowRight">
              <ArrowForward />
            </IconButton>
          </CardActions>
        </CardContent>
      </MaterialCard>
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
