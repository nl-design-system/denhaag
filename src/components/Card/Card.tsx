import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { StylesProvider } from "@material-ui/core/styles";
import ArrowForward from "@material-ui/icons/ArrowForward";
import BaseProps from "@gemeente-denhaag/baseprops";
import  "./card.module.css";
import "./mui-override.module.css";
import "@gemeente-denhaag/basestyles";
import { Typography } from "@gemeente-denhaag/typography";
import { cardClasses,
          cardArrowClasses,
          cardTitleClasses,
          cardSubtitleClasses,
          cardCaseClasses,
          cardCaseArrowClasses,
          cardCaseTitleClasses,
          cardCaseSubtitleClasses } from  "./bem-mapping";
import { CardHeader,
          CardContent,
          CardActions } from "@gemeente-denhaag/surfaces";
import { Icon } from "@material-ui/core";

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

  /**
   * Determines the title of the card
   */
  title: string;

  /**
   * Determines the subtitle of the card
   */
  subTitle?: string;

  /**
   * Determines the date shown on the card
   */
  date: Date;

}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  const muiVariant = props.raised;
  let classes;
  let arrowClasses;
  let titleClasses;
  let subtitleClasses;

  switch (props.variant) {
    case "case":
      classes = cardCaseClasses;
      arrowClasses = cardCaseArrowClasses;
      titleClasses = cardCaseTitleClasses;
      subtitleClasses = cardCaseSubtitleClasses;
      break;
    case "basic":
    default:
      classes = cardClasses;
      arrowClasses = cardArrowClasses;
      titleClasses = cardTitleClasses;
      subtitleClasses = cardSubtitleClasses;
      break;
  }

  return (
    <StylesProvider injectFirst>
      <MaterialCard classes={classes} {...muiVariant}>
        <CardHeader
          classes={titleClasses}
          title={props.title}
        />
        <CardContent disableSpacing={true}>
          <Typography variant="body2" classes={subtitleClasses} component="p">
            {props.subTitle}
          </Typography>
          <CardActions disableSpacing={true}>
            <Typography component="div" classes={subtitleClasses}>
              {props.date.toLocaleDateString()}
            </Typography>
            <Icon classes={arrowClasses} aria-label="ArrowRight">
              <ArrowForward />
            </Icon>
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
