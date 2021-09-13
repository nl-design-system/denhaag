import React, { createRef } from 'react';
import { Card as MaterialCard, Icon, Typography } from '@material-ui/core';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';
import './card.css';
import { cardArrowClasses, cardCaseClasses, cardClasses, cardSubtitleClasses, cardTitleClasses } from './bem-mapping';
import { CardContent } from '../CardContent/CardContent';
import { CardActions } from '../CardActions/CardActions';
import clsx from 'clsx';

export interface CardProps extends Omit<BaseProps, 'classes'> {
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
  href?: string;

  /**
   * Set to false to indicate an archived or inactive item
   */
  active?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({ active = true, ...props }: CardProps) => {
  const rootClassNames = clsx(
    cardClasses.root,
    props.variant === 'case' && cardCaseClasses.root,
    active === false && 'denhaag-card--inactive',
    props.className,
  );
  const arrowClasses = cardArrowClasses;
  const titleClasses = cardTitleClasses;
  const subtitleClasses = cardSubtitleClasses;
  const linkRef = createRef<HTMLAnchorElement>();

  const title = (
    <a href={props.href} ref={linkRef}>
      {props.title}
    </a>
  );

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof props.onClick === 'function') {
      props.onClick(event);
      event.stopPropagation();
    } else if (linkRef.current !== null) {
      linkRef.current.click();
    }
  };

  return (
    <MaterialCard className={rootClassNames} onClick={onClick}>
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
