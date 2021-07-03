import React, { createRef } from 'react';
import { Card as MaterialCard, Icon, Typography } from '@material-ui/core';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';
import './card.css';
import { cardClasses, cardArrowClasses, cardTitleClasses, cardSubtitleClasses, cardCaseClasses } from './bem-mapping';
import { CardContent } from '../CardContent/CardContent';
import { CardActions } from '../CardActions/CardActions';

export interface CardProps extends BaseProps {
  /**
   * Callback fired when the Card is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Determines the variant of the card
   * Variant can be either `basic` or `case`
   */
  variant?: 'basic' | 'case';

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

  /**
   * Determines the url the card points to
   */
  href: string;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  let classes;
  const arrowClasses = cardArrowClasses;
  const titleClasses = cardTitleClasses;
  const subtitleClasses = cardSubtitleClasses;
  const linkRef = createRef<HTMLAnchorElement>();

  const title = (
    <a href={props.href} ref={linkRef}>
      {props.title}
    </a>
  );

  const onClick = () => {
    if (linkRef.current !== null) {
      linkRef.current.click();
    }
  };

  switch (props.variant) {
    case 'case':
      classes = cardCaseClasses;
      break;
    case 'basic':
    default:
      classes = cardClasses;
  }

  return (
    <MaterialCard classes={classes} onClick={onClick}>
      <div className="denhaag-card__wrapper">
        <div className="denhaag-card__background"></div>
        <CardContent>
          <div className="denhaag-card__text-wrapper">
            <Typography classes={titleClasses} component="p">
              {title}
            </Typography>
            <Typography classes={subtitleClasses} component="p">
              {props.subTitle}
            </Typography>
          </div>
          <CardActions disableSpacing={true}>
            <Typography component="div" classes={subtitleClasses}>
              <time dateTime={props.date.toDateString()}>{props.date.toLocaleDateString()}</time>
            </Typography>
            <Icon classes={arrowClasses} aria-label="ArrowRightIcon">
              <ArrowRightIcon />
            </Icon>
          </CardActions>
        </CardContent>
      </div>
    </MaterialCard>
  );
};

/**
 * Default export for Card
 */
export default Card;
