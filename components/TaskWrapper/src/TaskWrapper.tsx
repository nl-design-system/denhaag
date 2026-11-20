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
  /** Optional pre-heading text-category, like "Doel". Rendered in an <hgroup> together with the heading. */
  preHeading?: string;
  /** Optional heading text. If omitted, no Header is rendered. */
  title?: string;
  /**
   * Without this prop the title is rendered as a Label paragraph (for WCAG
   * a heading is not allowed if there is no content). Set this prop if the
   * title should be a real HTML heading.
   */
  headingLevel?: TaskWrapperHeadingLevel;
  /**
   * Only relevant when headingLevel is not set so when the title
   * renders as a Label, not a real Heading. This is only for *visual*
   * styling of this label.
   */
  labelVisualLevel?: TaskWrapperHeadingLevel;
  /** Optional href, makes the heading (or label) itself a link. */
  href?: string;
  /** For projects that want to inject their own Link component */
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  /**
   * Optional status component, for example a DataBadge. Rendered in the Header below the
   * heading group. It is a sibling of the <hgroup>, not a child, because
   * an <hgroup> may only contain a heading and <p> elements.
   */
  status?: ReactNode;
  /**
   * Body content generic slot, for a list of task-navigation items
   * or any other NLDS component.
   */
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
  status,
  children,
  className,
}: TaskWrapperProps) => {
  const hasHeader = Boolean(title);

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
            // Heading comes first in the DOM for screenreaders, is reversed in CSS.
            <hgroup className="denhaag-task-wrapper__heading-group">
              {headingElement}
              <Paragraph className="denhaag-task-wrapper__pre-heading">{preHeading}</Paragraph>
            </hgroup>
          ) : (
            headingElement
          )}
          {status && <div className="denhaag-task-wrapper__status">{status}</div>}
        </Header>
      )}
      {/*
        The Body is always rendered, even without children. This component does not know whether there
        is data: when there are no tasks. An empty Body is hidden by CSS (:empty), and stays in the
        DOM so the back-end can fill it later.
      */}
      <Body>{children}</Body>
    </Base>
  );
};

export default TaskWrapper;
