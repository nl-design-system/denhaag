import React from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { CustomLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/typography';
import clsx from 'clsx';
import '../index.scss';
import Card from './Card';
import CardBackground from './CardBackground';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardTextWrapper from './CardTextWrapper';
import CardWrapper from './CardWrapper';
import CardDateWrapper from './CardDateWrapper';
import CardDate from './CardDate';
import { CardAction } from './CardAction';

export interface CaseCardProps {
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
   * Determines the card color
   */
  active?: boolean;

  /**
   * Custom Link component used for single-page apps.
   */
  Link?: CustomLink;
}

/**
 * Primary UI component for user interaction
 */
export const CaseCard: React.FC<CaseCardProps> = ({
  title,
  subTitle,
  date,
  href,
  active = true,
  Link,
}: CaseCardProps) => {
  const classNames = clsx('denhaag-case-card', !active && 'denhaag-case-card--archived');

  return (
    <Card className={classNames}>
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
            <CardAction aria-label={title} href={href} Action={Link}>
              <ArrowRightIcon className="denhaag-card__arrow-icon" />
            </CardAction>
          </CardActions>
        </CardContent>
      </CardWrapper>
    </Card>
  );
};

/**
 * Default export for Card
 */
export default CaseCard;
