import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/typography';
import clsx from 'clsx';
import '../index.scss';
import Card from './Card';
import Footer from './Footer';
import CardDateWrapper from './CardDateWrapper';
import CardDate from './CardDate';
import Action from './Action';
import { formatDate, FormatDateLabels, longDateOptions } from '@gemeente-denhaag/utils';
import Wrapper from './Wrapper';
import Background from './Background';

export interface CaseCardProps {
  title: string;
  subTitle?: string;
  date?: string;
  dateLabels?: FormatDateLabels;
  locale?: string;
  href?: string;
  active?: boolean;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

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
  const classNames = clsx({ 'denhaag-case-card--archived': !active });
  const dateTime = date ? new Date(date) : undefined;

  return (
    <Card className={classNames}>
      <Wrapper>
        <Background />
        <div>
          <Paragraph className="denhaag-case-card__title">{title}</Paragraph>
          <Paragraph className="denhaag-case-card__subtitle">{subTitle}</Paragraph>
        </div>
        <Footer>
          {date && (
            <CardDateWrapper>
              <CardDate dateTime={dateTime?.toISOString()}>
                {formatDate({ dateTime: date, locale: locale, format: longDateOptions, labels: dateLabels })[0]}
              </CardDate>
            </CardDateWrapper>
          )}
          <Action aria-label={title} href={href} Action={Link}>
            <ArrowRightIcon className="denhaag-case-card__arrow" />
          </Action>
        </Footer>
      </Wrapper>
    </Card>
  );
};

export default CaseCard;
