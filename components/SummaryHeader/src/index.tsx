import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import { Heading, Paragraph } from '@gemeente-denhaag/typography';
import Link from '@gemeente-denhaag/link';
import clsx from 'clsx';
import { EditIcon } from '@gemeente-denhaag/icons';
import './index.scss';

export interface SummaryHeaderProps extends Omit<BaseProps, 'classes'> {
  /**
   * Label for the heading
   */
  headingLabel?: string;

  /**
   * URL to the edit page
   */
  href?: string;

  /**
   * Label of the link
   */
  linkLabel?: string;
}

/**
 * SummaryHeader.
 */
export const SummaryHeader: React.FC<SummaryHeaderProps> = (props: SummaryHeaderProps) => {
  return (
    <div className={clsx('denhaag-data-summary-section__header')}>
      <Heading level={3} className={clsx('denhaag-data-summary-section__heading')}>
        {props.headingLabel}
      </Heading>
      <Paragraph className={clsx('denhaag-data-summary-section__actions')}>
        <Link href={props.href} iconAlign="start" icon={<EditIcon />}>
          {props.linkLabel}
        </Link>
      </Paragraph>
    </div>
  );
};

/**
 * Default export for SummaryHeader
 */
export default SummaryHeader;
