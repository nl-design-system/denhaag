import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/typography';
import clsx from 'clsx';
import '../index.scss';
import Card from './Card';
import Footer from './Footer';
import Action from './Action';
import Wrapper from './Wrapper';
import Background from './Background';
import Context from './Context';

export interface CaseCardProps {
  title: string;
  subTitle?: string;
  context?: React.ReactNode;
  href?: string;
  appearance?: 'archived' | 'list';
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const CaseCard = ({ title, subTitle, context, href, appearance, Link = BasicLink }: CaseCardProps) => {
  const classNames = clsx({
    'denhaag-case-card--archived': appearance === 'archived',
    'denhaag-case-card--list': appearance === 'list',
  });

  return (
    <Card className={classNames}>
      <Wrapper>
        <Background />
        <div>
          <Paragraph className="denhaag-case-card__title">{title}</Paragraph>
          <Paragraph className="denhaag-case-card__subtitle">{subTitle}</Paragraph>
        </div>
        <Footer>
          <Context>{context}</Context>
          <Action aria-label={title} href={href} Action={Link}>
            <ArrowRightIcon className="denhaag-case-card__arrow" />
          </Action>
        </Footer>
      </Wrapper>
    </Card>
  );
};

export default CaseCard;
