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

/** Only allow real heading levels, never h1 (that belongs to the page itself) */
export type BaseCardHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface BaseCardProps {
  /** Small line of text above the title, e.g. a status label */
  eyebrow?: string;
  title: string;
  subTitle?: string;
  /**
   * Without this prop the title is rendered as a paragraph (for WCAG).
   * Set this prop if the title should also be a real heading in the page
   * structure, e.g. headingLevel={2} for an <h2>.
   */
  headingLevel?: BaseCardHeadingLevel;
  context?: React.ReactNode;
  href?: string;
  appearance?: BaseCardAppearance;
  /** For projects that want to inject their own Link component (e.g. react-router) */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const BaseCard = ({
  eyebrow,
  title,
  subTitle,
  headingLevel,
  context,
  href,
  appearance = 'default',
  Link = BasicLink,
}: BaseCardProps) => {
  const TitleTag = headingLevel ? (`h${headingLevel}` as const) : 'p';

  const titleElement = <TitleTag className="denhaag-base-card__title">{title}</TitleTag>;

  return (
    <Base appearance={appearance}>
      <Wrapper>
        <Background />
        <div>
          {eyebrow && headingLevel ? (
            // Only group when the title is actually a heading; otherwise there is
            // no heading to semantically attach the eyebrow to.
            <hgroup role="group" aria-roledescription="Heading group">
              <p aria-roledescription="eyebrow" className="denhaag-base-card__eyebrow">
                {eyebrow}
              </p>
              {titleElement}
            </hgroup>
          ) : (
            <>
              {eyebrow && <p className="denhaag-base-card__eyebrow">{eyebrow}</p>}
              {titleElement}
            </>
          )}

          {subTitle && <Paragraph className="denhaag-base-card__subtitle">{subTitle}</Paragraph>}
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
