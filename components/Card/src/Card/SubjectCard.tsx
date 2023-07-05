import React from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { Paragraph } from '@gemeente-denhaag/typography';
import './card.scss';
import Card from './Card';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardTextWrapper from './CardTextWrapper';
import CardDateWrapper from './CardDateWrapper';
import CardDate from './CardDate';
import { CardAction, Link } from './CardAction';

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
  date?: Date;

  /**
   * Determines the url the card points to
   */
  href?: string;

  /**
   * Custom Link component used for single-page apps.
   */
  Link?: Link;
}

/**
 * Primary UI component for user interaction
 */
export const SubjectCard: React.FC<SubjectCardProps> = ({ title, subTitle, date, href, Link }: SubjectCardProps) => {
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
              <CardDate dateTime={date.toISOString()}>{date.toLocaleDateString()}</CardDate>
            </CardDateWrapper>
          )}
          <CardAction href={href} Action={Link}>
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
