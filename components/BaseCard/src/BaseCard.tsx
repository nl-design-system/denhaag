import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import Base from './BaseCardBase';
import Footer from './BaseCardFooter';
import Action from './BaseCardAction';
import Wrapper from './BaseCardWrapper';
import Background from './BaseCardBackground';
import Context from './BaseCardContext';

export type BaseCardAppearance = 'default' | 'archived' | 'list';

export interface BaseCardProps {
  title: string;
  subTitle?: string;
  context?: React.ReactNode;
  href?: string;
  appearance?: BaseCardAppearance;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const BaseCard = ({
  title,
  subTitle,
  context,
  href,
  appearance = 'default',
  Link = BasicLink,
}: BaseCardProps) => {
  return (
    <Base appearance={appearance}>
      <Wrapper>
        <Background />
        <div>
          <Paragraph className="denhaag-base-card__title">{title}</Paragraph>
          <Paragraph className="denhaag-base-card__subtitle">{subTitle}</Paragraph>
        </div>
        <Footer>
          <Context>{context}</Context>
          <Action aria-label={title} href={href} Action={Link}>
            <ArrowRightIcon className="denhaag-base-card__arrow" />
          </Action>
        </Footer>
      </Wrapper>
    </Base>
  );
};

export default BaseCard;
