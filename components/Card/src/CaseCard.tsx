import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/typography';
import Base from './CaseCardBase';
import Footer from './CaseCardFooter';
import Action from './CaseCardAction';
import Wrapper from './CaseCardWrapper';
import Background from './CaseCardBackground';
import Context from './CaseCardContext';

export type CaseCardAppearance = 'default' | 'archived' | 'list';

export interface CaseCardProps {
  title: string;
  subTitle?: string;
  context?: React.ReactNode;
  href?: string;
  appearance?: CaseCardAppearance;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const CaseCard = ({
  title,
  subTitle,
  context,
  href,
  appearance = 'default',
  Link = BasicLink,
}: CaseCardProps) => {
  return (
    <Base appearance={appearance}>
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
    </Base>
  );
};

export default CaseCard;
