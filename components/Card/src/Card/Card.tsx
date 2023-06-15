import React, { createRef } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import BaseProps from '@gemeente-denhaag/baseprops';
import { Paragraph } from '@gemeente-denhaag/typography';
import './card.scss';
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
    props.variant === 'case' && 'denhaag-card--case',
    archived === true && 'denhaag-card--archived',
    props.className,
  );
  const linkRef = createRef<HTMLAnchorElement>();

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof props.onClick === 'function') {
      props.onClick(event);
      event.stopPropagation();
    } else if (linkRef.current !== null) {
      linkRef.current.click();
    }
  };

  return (
    // eslint-disable-next-line
    <div className={rootClassNames} onClick={onClick}>
      <a className="denhaag-card__wrapper" href={props.href} ref={linkRef}>
        <div className="denhaag-card__background"></div>
        <div className="denhaag-card__content">
          <div className="denhaag-card__text-wrapper">
            <Paragraph className="denhaag-card__title">{props.title}</Paragraph>
            <Paragraph className="denhaag-card__subtitle">{props.subTitle}</Paragraph>
          </div>
          <div className="denhaag-card__actions">
            {props.date && (
              <div className="denhaag-card__subtitle">
                <time dateTime={props.date.toISOString()}>{props.date.toLocaleDateString()}</time>
              </div>
            )}
            <ArrowRightIcon className="denhaag-card__arrow-icon" />
          </div>
        </div>
      </a>
    </div>
  );
};

/**
 * Default export for Card
 */
export default Card;
