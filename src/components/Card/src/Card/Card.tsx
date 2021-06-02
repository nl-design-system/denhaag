import React from 'react';
import MaterialCard from '@material-ui/core/Card';
import { StylesProvider } from '@material-ui/core/styles';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';
import './card.css';
import { Typography } from '@gemeente-denhaag/typography';
import {
  cardClasses,
  cardArrowClasses,
  cardTitleClasses,
  cardSubtitleClasses,
  cardCaseClasses
} from './bem-mapping';
import {
  CardContent,
  CardActions
} from '../';
import { Icon } from '@material-ui/core';

export interface CardProps extends BaseProps {
  /**
   * Callback fired when the Card is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;


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

}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  let classes;
  const arrowClasses = cardArrowClasses;
  const titleClasses = cardTitleClasses;
  const subtitleClasses = cardSubtitleClasses;

  switch (props.variant) {
    case 'case':
      classes = cardCaseClasses;
      break;
    case 'basic':
    default:
      classes = cardClasses;
  }

  return (
    <StylesProvider injectFirst>
      <MaterialCard classes={classes} onClick={props.onClick} tabIndex={props.tabIndex}>
        <div className='denhaag-card__wrapper'>
          <div className='denhaag-card__background'></div>
          <CardContent disableSpacing={true}>
            <div className='denhaag-card__text-wrapper'>
              <Typography classes={titleClasses} component='p'>
                {props.title}
              </Typography>
              <Typography classes={subtitleClasses} component='p'>
                {props.subTitle}
              </Typography>
            </div>
            <CardActions disableSpacing={true}>
              <Typography component='div' classes={subtitleClasses}>
                <time dateTime={props.date.toLocaleDateString()}>
                  {props.date.toLocaleDateString()}
                </time>
              </Typography>
              <Icon classes={arrowClasses} aria-label='ArrowRightIcon'>
                <ArrowRightIcon />
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
