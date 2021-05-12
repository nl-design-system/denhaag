import React from "react";
import MaterialCard from "@material-ui/core/Card";
import { StylesProvider } from "@material-ui/core/styles";
import ArrowForward from "@gemeente-denhaag/icons";
import BaseProps from "@gemeente-denhaag/baseprops";
import "./mui-override.module.css";
import  "./card.module.css";
import "@gemeente-denhaag/basestyles";
import { Typography } from "@gemeente-denhaag/typography";
import { cardClasses,
          cardArrowClasses,
          cardTitleClasses,
          cardSubtitleClasses,
          cardCaseClasses} from  "./bem-mapping";
import { CardContent,
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
  const arrowClasses = cardArrowClasses;
  const titleClasses = cardTitleClasses;
  const subtitleClasses = cardSubtitleClasses;

  switch (props.variant) {
    case "case":
      classes = cardCaseClasses;
      break;
    case "basic":
    default:
      classes = cardClasses;
  }

  return (
    <StylesProvider injectFirst>
      <MaterialCard classes={classes} {...muiVariant} tabIndex={0}>
        <div className="denhaag-card__wrapper">
          <div className="denhaag-card__background"></div>
              <CardContent disableSpacing={true}>
            <div className="denhaag-card--case__text__wrapper">
                <Typography classes={titleClasses} component="p">
                  {props.title}
                </Typography>
                <Typography classes={subtitleClasses} component="p">
                  {props.subTitle}
                </Typography>
            </div>
                <CardActions disableSpacing={true}>
                  <Typography component="div" classes={subtitleClasses}>
                    {props.date.toLocaleDateString()}
                  </Typography>
                  <Icon classes={arrowClasses} aria-label="ArrowRight">
                    <ArrowForward />
                  </Icon>
                </CardActions>
              </CardContent>
        </div>
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
