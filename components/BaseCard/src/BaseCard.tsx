import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Heading } from '@gemeente-denhaag/heading';
import Base from './BaseCardBase';
import Footer from './BaseCardFooter';
import Action from './BaseCardAction';
import Wrapper from './BaseCardWrapper';
import Decoration from './BaseCardDecoration';
import Header from './BaseCardHeader';
import Body from './BaseCardBody';
import Metadata from './BaseCardMetadata';

export type BaseCardAppearance = 'default' | 'archived' | 'list';
/** Which color theme the card uses */
export type BaseCardVariant = 'default' | 'case';
/** Allow real heading levels, never h1 (belongs to the page itself) */
export type BaseCardHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface BaseCardProps {
  preHeading?: string;
  title: string;
  subTitle?: string;
  /**
   * Without this prop the title is rendered as a label paragraph (for WCAG).
   * Set this prop if the title should be a real HTML heading in the page
   * structure, e.g. headingLevel={2} for an <h2>.
   */
  headingLevel?: BaseCardHeadingLevel;
  metadata?: React.ReactNode;
  href?: string;
  appearance?: BaseCardAppearance;
  /** Which color theme the card uses */
  variant?: BaseCardVariant;
  /** For projects that want to inject their own Link component (e.g. react-router) */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

// Only variants that have a paper-fold decoration render <Decoration />.
// The "default" variant has no fold — it will get a pre-header image slot
// instead. ToDo: Extend list once "plan" gets its own decoration.
const VARIANTS_WITH_DECORATION: BaseCardVariant[] = ['case'];

export const BaseCard = ({
  preHeading,
  title,
  subTitle,
  headingLevel,
  metadata,
  href,
  appearance = 'default',
  variant = 'default',
  Link = BasicLink,
}: BaseCardProps) => {
  const hasDecoration = VARIANTS_WITH_DECORATION.includes(variant);
  const hasFooter = Boolean(metadata || href);

  const titleElement = headingLevel ? (
    <Heading level={headingLevel} className="denhaag-base-card__heading">
      {title}
    </Heading>
  ) : (
    <p className="denhaag-base-card__label">{title}</p>
  );

  return (
    <Base appearance={appearance} variant={variant}>
      <Wrapper>
        {hasDecoration && <Decoration />}
        <Header>
          {preHeading && headingLevel ? (
            // Only group when the title is actually a heading; otherwise there is
            // no heading to semantically attach the pre-heading to.
            <hgroup>
              <Paragraph className="denhaag-base-card__pre-heading">{preHeading}</Paragraph>
              {titleElement}
            </hgroup>
          ) : (
            <>
              {preHeading && <Paragraph className="denhaag-base-card__pre-heading">{preHeading}</Paragraph>}
              {titleElement}
            </>
          )}
        </Header>
        {subTitle && (
          <Body>
            <Paragraph className="denhaag-base-card__description">{subTitle}</Paragraph>
          </Body>
        )}
        {hasFooter && (
          <Footer>
            {metadata && <Metadata>{metadata}</Metadata>}
            {href && (
              <Action aria-label={title} href={href} Action={Link}>
                <ArrowRightIcon className="denhaag-base-card__arrow" />
              </Action>
            )}
          </Footer>
        )}
      </Wrapper>
    </Base>
  );
};

export default BaseCard;
