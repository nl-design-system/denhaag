import React from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import BaseProps from '@gemeente-denhaag/baseprops';
import { Paragraph } from '@gemeente-denhaag/typography';
import './card.scss';
import clsx from 'clsx';
import CardBackground from './CardBackground';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardTextWrapper from './CardTextWrapper';
import CardWrapper from './CardWrapper';
import CardDateWrapper from './CardDateWrapper';
import CardDate from './CardDate';
import CardAction from './CardAction';

export interface CardProps extends Omit<BaseProps, 'classes'> {
  /**
   * Determines the variant of the card
   * Variant can be either `basic` or `case`
   */
  variant?: 'subject' | 'case-active' | 'case-inactive';

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
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({ title, subTitle, date, variant, className, href }: CardProps) => {
  const rootClassNames = clsx(
    'denhaag-card',
    variant === 'case-active' && 'denhaag-card--case',
    variant === 'case-inactive' && 'denhaag-card--case denhaag-card--archived',
    className,
  );

  return (
    <div className={rootClassNames}>
      <CardWrapper>
        <CardBackground />
        <CardContent>
          <CardTextWrapper>
            <Paragraph className="denhaag-card__title">{title}</Paragraph>
            <Paragraph className="denhaag-card__subtitle">{subTitle}</Paragraph>
          </CardTextWrapper>
          <CardActions>
            {date && (
              <CardDateWrapper>
                <CardDate dateTime={date.toISOString()}>{date.toLocaleDateString()}</CardDate>
              </CardDateWrapper>
            )}
            <CardAction href={href}>
              <ArrowRightIcon className="denhaag-card__arrow-icon" />
            </CardAction>
          </CardActions>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

/**
 * Default export for Card
 */
export default Card;
