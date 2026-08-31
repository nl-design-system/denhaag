import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Heading } from '@gemeente-denhaag/heading';
import { DescriptionList, DescriptionListProps } from '@gemeente-denhaag/descriptionlist';
import Base from './CardAsLinkBase';
import Footer from './CardAsLinkFooter';
import Action from './CardAsLinkAction';
import Wrapper from './CardAsLinkWrapper';
import Decoration from './CardAsLinkDecoration';
import PreHeader from './CardAsLinkPreHeader';
import Header from './CardAsLinkHeader';
import Body from './CardAsLinkBody';
import Metadata from './CardAsLinkMetadata';

export type CardAsLinkAppearance = 'default' | 'archived' | 'list';

/** Which color theme/layout the card uses */
export type CardAsLinkVariant = 'default' | 'case' | 'case-extended' | 'plan' | 'product';

/** Allow real heading levels, never h1 (that belongs to the page itself) */
export type CardAsLinkHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface CardAsLinkProps {
  /** Small line of text above the heading/label, e.g. a status ("Pre-heading" in NLDS terms — not to be confused with the Pre-header image slot) */
  preHeading?: string;
  title: string;
  subTitle?: string;
  /**
   * Without this prop the title is rendered as a label paragraph (for WCAG).
   * Set this prop if the title should be a real HTML heading in the page
   * structure, e.g. headingLevel={2} for an <h2>.
   */
  headingLevel?: CardAsLinkHeadingLevel;
  metadata?: React.ReactNode;
  href?: string;
  appearance?: CardAsLinkAppearance;
  /** Which color theme/layout the card uses */
  variant?: CardAsLinkVariant;
  /** Only used when variant="default" — content shown in the pre-header slot, e.g. an <img> */
  preHeaderImage?: React.ReactNode;
  /** Only used when variant="case-extended" — content shown in the pre-header slot, e.g. a status badge */
  preHeaderStatus?: React.ReactNode;
  /**
   * Only used when variant="case-extended" — renders a DescriptionList in
   * the Body instead of the subTitle description paragraph.
   */
  descriptionList?: DescriptionListProps['items'];
  /**
   * Only used when variant="case-extended" — the visible footer link text.
   * Other variants show an icon-only link instead; case-extended shows
   * this text where the other variants would show metadata/icon, and the
   * "whole card is clickable" trick is attached to this link instead of
   * the icon-only Action.
   */
  linkText?: string;
  /** For projects that want to inject their own Link component (e.g. react-router) */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

// Only variants that have a paper-fold decoration render <Decoration />.
// The "default" variant has no fold — it will get a pre-header image slot
// instead.
const VARIANTS_WITH_DECORATION: CardAsLinkVariant[] = ['case', 'plan'];

export const CardAsLink = ({
  preHeading,
  title,
  subTitle,
  headingLevel,
  metadata,
  href,
  appearance = 'default',
  variant = 'default',
  preHeaderImage,
  preHeaderStatus,
  descriptionList,
  linkText,
  Link = BasicLink,
}: CardAsLinkProps) => {
  const hasDecoration = VARIANTS_WITH_DECORATION.includes(variant);
  const hasPreHeaderImage = variant === 'default' && Boolean(preHeaderImage);
  const hasPreHeaderStatus = variant === 'case-extended' && Boolean(preHeaderStatus);
  const isCaseExtended = variant === 'case-extended';
  const hasFooter = Boolean(metadata || href);

  const titleElement = headingLevel ? (
    <Heading level={headingLevel} className="denhaag-card-as-link__heading">
      {title}
    </Heading>
  ) : (
    <p className="denhaag-card-as-link__label">{title}</p>
  );

  return (
    <Base appearance={appearance} variant={variant}>
      <Wrapper>
        {hasDecoration && (
          <PreHeader>
            <Decoration />
          </PreHeader>
        )}
        {hasPreHeaderImage && <PreHeader>{preHeaderImage}</PreHeader>}
        <Header>
          {preHeading && headingLevel ? (
            <hgroup>
              <Paragraph className="denhaag-card-as-link__pre-heading">{preHeading}</Paragraph>
              {titleElement}
            </hgroup>
          ) : (
            <>
              {preHeading && <Paragraph className="denhaag-card-as-link__pre-heading">{preHeading}</Paragraph>}
              {titleElement}
            </>
          )}
        </Header>
        {/*
        case-extended's pre-header content (e.g. an Alert/status) is
        meaningful, not decorative, so it comes AFTER the Heading in the
        DOM — a screen reader should announce the card's subject Heading first,
        then its status. Default/Case's pre-header content (image,
        decoration) stays BEFORE the Heading, since that content is
        either decorative or purely visual framing.

        It must still visually appear above the Heading, like
        Default/Case's pre-header content does. `visuallyFirst` applies a
        CSS order to restore that visual position without changing the
        DOM/reading order set above.
      */}
        {hasPreHeaderStatus && <PreHeader visuallyFirst>{preHeaderStatus}</PreHeader>}
        {descriptionList ? (
          <Body>
            <DescriptionList items={descriptionList} />
          </Body>
        ) : (
          subTitle && (
            <Body>
              <Paragraph className="denhaag-card-as-link__description">{subTitle}</Paragraph>
            </Body>
          )
        )}
        {hasFooter && (
          <Footer>
            {/*
            The footer always has two fixed zones — __footer-meta (left)
            and __footer-link-icon (right) — instead of relying on
            justify-content: space-between with a variable number of
            children, or a margin-auto trick on the link itself. That way
            the right-hand zone always stays right-aligned, and the
            left-hand zone always stays left-aligned, no matter which of
            the two is empty, and no matter what's inside them (an arrow
            icon, a plain text link, an icon from a different icon
            library, etc.).
          */}
            <div className="denhaag-card-as-link__footer-meta">
              {isCaseExtended
                ? href && (
                    <Action aria-label={title} href={href} Action={Link}>
                      {linkText}
                    </Action>
                  )
                : metadata && <Metadata>{metadata}</Metadata>}
            </div>
            <div className="denhaag-card-as-link__footer-link-icon">
              {!isCaseExtended && href && (
                <Action aria-label={title} href={href} Action={Link}>
                  <ArrowRightIcon className="denhaag-card-as-link__arrow" />
                </Action>
              )}
            </div>
          </Footer>
        )}
      </Wrapper>
    </Base>
  );
};

export default CardAsLink;
