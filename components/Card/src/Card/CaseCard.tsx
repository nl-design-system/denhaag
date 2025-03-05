import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
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
import { formatDate, FormatDateLabels, longDateOptions } from '@gemeente-denhaag/utils';

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
  date?: string;

  /**
   * Determines the date format shown on the card
   */
  dateLabels?: FormatDateLabels;

  /**
   * Determines the date format shown on the card
   */
  locale?: string;

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
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

/**
 * Primary UI component for user interaction
 */
export const CaseCard = ({
  title,
  subTitle,
  date,
  dateLabels,
  locale,
  href,
  active = true,
  Link = BasicLink,
}: CaseCardProps) => {
  const classNames = clsx('denhaag-case-card', !active && 'denhaag-case-card--archived');
  const dateTime = date ? new Date(date) : undefined;

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
                <CardDate dateTime={dateTime?.toISOString()}>
                  {formatDate({ dateTime: date, locale: locale, format: longDateOptions, labels: dateLabels })[0]}
                </CardDate>
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
