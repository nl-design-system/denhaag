import React, { createRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { CardContent } from '../CardContent/CardContent';
import { CardActions } from '../CardActions/CardActions';

import './card.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
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
  date?: Date;

  /**
   * Determines the url the card points to
   */
  href?: string;

  /**
   * Set to false to indicate an archived or inactive item
   */
  archived?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({ archived = false, ...props }: CardProps) => {
  const rootClassNames = clsx(
    'denhaag-card',
    {
      'denhaag-card--case': props.variant === 'case',
      'denhaag-card--archived': archived,
    },
    props.className,
  );
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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={rootClassNames} onClick={onClick}>
      <div className="denhaag-card__wrapper">
        <div className="denhaag-card__background"></div>
        <CardContent>
          <div className="denhaag-card__text-wrapper">
            <div className={'denhaag-card__title'}>{title}</div>
            <div className={'denhaag-card__subtitle'}>{props.subTitle}</div>
          </div>
          <CardActions>
            {props.date && (
              <div className={'denhaag-card__subtitle'}>
                <time dateTime={props.date.toISOString()}>{props.date.toLocaleDateString()}</time>
              </div>
            )}
            <ArrowRightIcon className={'denhaag-card__arrow'} />
          </CardActions>
        </CardContent>
      </div>
    </div>
  );
};

/**
 * Default export for Card
 */
export default Card;
