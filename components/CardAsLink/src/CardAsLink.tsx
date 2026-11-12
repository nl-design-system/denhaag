import React, { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
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
import Meta from './CardAsLinkMetadata';

export type CardAsLinkAppearance = 'default' | 'archived' | 'list';

/** Which color theme/layout the card uses */
export type CardAsLinkVariant = 'default' | 'case' | 'case-extended' | 'plan' | 'product';

/** Allow real heading levels, never h1 (that belongs to the page itself) */
export type CardAsLinkHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface CardAsLinkProps {
  /** Small line of text above the heading/label, e.g. a status ("Pre-heading" in NLDS terms — not to be confused with the Pre-header image slot) */
  preHeading?: ReactNode;
  /**
   * `title`: the card's main title. Always shown, as a heading or as a label. Kept as `string` (not `ReactNode`) because it
   * also serves as the accessible name (`aria-label`) for the icon-only footer link.
   */
  title: string;
  /** `subTitle`: additional descriptive text shown in the Body, below the title. Optional. */
  subTitle?: ReactNode;
  /**
   * `headingLevel`: controls how `title` is rendered. Without it the title
   * is a plain label paragraph (<p>), not a heading, so the card does not
   * add an empty or misleading entry to the page's heading structure for
   * screen readers. Set it when the card introduces a subject of its own,
   * e.g. headingLevel={2} renders the title as an <h2>.
   */
  headingLevel?: CardAsLinkHeadingLevel;
  /**
   * `labelVisualLevel`: only relevant when `headingLevel` is not set, so
   * the title renders as a label (<p>). Gives that label the visual style
   * of a heading level (via nl-heading--level-N), without making it a
   * semantic heading: no <h*> tag and no entry in the page's heading
   * structure. Purely cosmetic.
   */
  labelVisualLevel?: CardAsLinkHeadingLevel;
  metadata?: ReactNode;
  /**
   * `body`: renders any content in the Body. Takes priority over
   * `descriptionList` and `subTitle` when set.
   */
  body?: ReactNode;
  href?: string;
  appearance?: CardAsLinkAppearance;
  /** Which color theme/layout the card uses */
  variant?: CardAsLinkVariant;
  /** Only used when variant="default" — content shown in the pre-header slot, e.g. an <img> */
  preHeaderImage?: ReactNode;
  /** Only used when variant="case-extended" — content shown in the pre-header slot, e.g. a status badge */
  preHeaderStatus?: ReactNode;
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
  linkText?: ReactNode;
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
  labelVisualLevel,
  metadata,
  body,
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
    <p
      className={clsx(
        'denhaag-card-as-link__label',
        labelVisualLevel && `nl-heading nl-heading--level-${labelVisualLevel}`,
      )}
    >
      {title}
    </p>
  );

  // The pre-heading and title are the same with or without <hgroup>,
  // so they are built once here and only wrapped below when needed.
  const headerContent = (
    <>
      {preHeading && <Paragraph className="denhaag-card-as-link__pre-heading">{preHeading}</Paragraph>}
      {titleElement}
    </>
  );

  // `body` takes priority over `descriptionList`, which takes priority over `subTitle`.
  const bodyContent =
    body ||
    (descriptionList ? (
      <DescriptionList items={descriptionList} />
    ) : (
      subTitle && <Paragraph className="denhaag-card-as-link__description">{subTitle}</Paragraph>
    ));

  return (
    <Base appearance={appearance} variant={variant}>
      <Wrapper>
        <Header>
          {/*
            <hgroup> needs a real heading (h1–h6) inside it. Without
            `headingLevel` the title is a plain <p> label, so we only wrap
            in <hgroup> if both `preHeading` and `headingLevel` are set.
          */}
          {preHeading && headingLevel ? <hgroup>{headerContent}</hgroup> : headerContent}
        </Header>
        {/*
          All Pre-header content (Decoration, Image, Status) comes AFTER
          the Header in the DOM. A screen reader should always hear the
          card's subject (the Heading) first, and we can't assume an image
          is purely decorative, it may carry meaningful alt text. The
          Pre-header restores the usual visual position (above the
          Heading) via a fixed CSS `order: -1` in _pre-header.scss,
          without changing DOM/reading order.
        */}
        {hasDecoration && (
          <PreHeader>
            <Decoration aria-hidden="true" />
          </PreHeader>
        )}
        {hasPreHeaderImage && <PreHeader>{preHeaderImage}</PreHeader>}
        {hasPreHeaderStatus && <PreHeader>{preHeaderStatus}</PreHeader>}
        {/* `body` renders any content in the Body and takes priority over `descriptionList` and `subTitle`. */}
        {bodyContent && <Body>{bodyContent}</Body>}
        {hasFooter && (
          <Footer>
            {/*
            The footer always has two fixed zones — __meta (left)
            and __link-icon (right) — instead of relying on
            justify-content: space-between with a variable number of
            children, or a margin-auto trick on the link itself. That way
            the right-hand zone always stays right-aligned, and the
            left-hand zone always stays left-aligned, no matter which of
            the two is empty, and no matter what's inside them (an arrow
            icon, a plain text link, an icon from a different icon
            library, etc.).
          */}
            <Meta>
              {isCaseExtended
                ? href && (
                    <Action href={href} Action={Link}>
                      {linkText}
                    </Action>
                  )
                : metadata}
            </Meta>
            <div className="denhaag-card-as-link__link-icon">
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
