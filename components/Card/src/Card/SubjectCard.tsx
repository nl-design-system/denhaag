import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/typography';
import '../index.scss';
import Card from './Card';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardTextWrapper from './CardTextWrapper';
import CardDateWrapper from './CardDateWrapper';
import CardDate from './CardDate';
import { CardAction } from './CardAction';
import { formatDate, longDateOptions } from '@gemeente-denhaag/utils';

export interface SubjectCardProps {
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
  date?: string;

  /**
   * Determines the date format shown on the card
   */
  locale?: string;

  /**
   * Determines the url the card points to
   */
  href?: string;

  /**
   * Custom Link component used for single-page apps.
   */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

/**
 * Primary UI component for user interaction
 */
export const SubjectCard = ({ title, subTitle, date, locale, href, Link = BasicLink }: SubjectCardProps) => {
  const dateTime = date ? new Date(date) : undefined;

  return (
    <Card className="denhaag-subject-card">
      <CardContent>
        <CardTextWrapper>
          <Paragraph className="denhaag-card__title">{title}</Paragraph>
          <Paragraph className="denhaag-card__subtitle">{subTitle}</Paragraph>
        </CardTextWrapper>
        <CardActions>
          {date && (
            <CardDateWrapper>
              <CardDate dateTime={dateTime?.toISOString()}>
                {formatDate({ dateTime: date, locale: locale, format: longDateOptions })[0]}
              </CardDate>
            </CardDateWrapper>
          )}
          <CardAction aria-label={title} href={href} Action={Link}>
            <ArrowRightIcon className="denhaag-card__arrow-icon" />
          </CardAction>
        </CardActions>
      </CardContent>
    </Card>
  );
};

/**
 * Default export for Card
 */
export default SubjectCard;
