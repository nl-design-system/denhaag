import React from 'react';
import clsx from 'clsx';
import type { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';
import { BasicLink } from '@gemeente-denhaag/link';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Heading } from '@gemeente-denhaag/heading';
import Base from './TaskWrapperBase';
import Header from './TaskWrapperHeader';
import Body from './TaskWrapperBody';

export type TaskWrapperHeadingLevel = 2 | 3 | 4 | 5 | 6;

export interface TaskWrapperProps {
  /** Optional pre-heading text, e.g. "Doel". Rendered in an <hgroup> together with the heading. */
  preHeading?: string;
  /** Optional heading text. If omitted, no Header is rendered at all. */
  title?: string;
  /**
   * Without this prop the title is rendered as a Label paragraph (for WCAG —
   * a heading may never be empty of real content). Set this prop if the
   * title should be a real HTML heading in the page structure, e.g.
   * headingLevel={2} for an <h2>.
   */
  headingLevel?: TaskWrapperHeadingLevel;
  /**
   * Only relevant when headingLevel is not set — i.e. when the title
   * renders as a Label, not a real Heading. This applies the *visual*
   * styling of that heading level (via nl-heading--level-N, the same
   * styling engine the real Heading uses) to the Label, WITHOUT making it
   * a semantic heading — no <h*> tag, no entry in the page's heading
   * structure. Purely cosmetic.
   */
  labelVisualLevel?: TaskWrapperHeadingLevel;
  /** Optional href — makes the heading (or label) itself a link. */
  href?: string;
  /** For projects that want to inject their own Link component (e.g. react-router) */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  /** Optional description text, rendered as the first thing in the Body. */
  description?: string;
  /** Body content — fully generic slot, rendered below the description, e.g. a list of task-navigation items or any other NLDS component. */
  children?: ReactNode;
  className?: string;
}

export const TaskWrapper = ({
  preHeading,
  title,
  headingLevel,
  labelVisualLevel,
  href,
  Link = BasicLink,
  description,
  children,
  className,
}: TaskWrapperProps) => {
  const hasHeader = Boolean(title);
  const hasBody = Boolean(description || children);

  const titleContent = href ? <Link href={href}>{title}</Link> : title;

  const headingElement = headingLevel ? (
    <Heading level={headingLevel} className="denhaag-task-wrapper__heading">
      {titleContent}
    </Heading>
  ) : (
    <p
      className={clsx(
        'denhaag-task-wrapper__label',
        labelVisualLevel && `nl-heading nl-heading--level-${labelVisualLevel}`,
      )}
    >
      {titleContent}
    </p>
  );

  return (
    <Base className={className}>
      {hasHeader && (
        <Header>
          {preHeading ? (
            // WCAG 1.3.1: <hgroup> met een heading gevolgd door een <p>.
            // WCAG 1.3.2: de HTML van de heading moet VÓÓR die van de
            // pre-heading staan; de visuele volgorde (pre-heading boven
            // heading) wordt uitsluitend met CSS teruggedraaid.
            <hgroup className="denhaag-task-wrapper__heading-group">
              {headingElement}
              <Paragraph className="denhaag-task-wrapper__pre-heading">{preHeading}</Paragraph>
            </hgroup>
          ) : (
            headingElement
          )}
        </Header>
      )}
      {hasBody && (
        <Body>
          {description && <Paragraph className="denhaag-task-wrapper__description">{description}</Paragraph>}
          {children}
        </Body>
      )}
    </Base>
  );
};

export default TaskWrapper;
