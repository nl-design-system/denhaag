import React from 'react';
import { AlertTriangleFilledIcon } from '@gemeente-denhaag/icons';
import { Time } from './Time';
import { formatDate, FormatDateLabels } from '@gemeente-denhaag/utils';
import clsx from 'clsx';

interface Props {
  dateTime: string;
  now?: string;
  relative?: boolean;
  locale?: string;
  labels?: FormatDateLabels;
}

export const ActionDate = ({ dateTime, now = new Date().toISOString(), relative = false, locale, labels }: Props) => {
  const [formattedDate, deadline] = formatDate({ dateTime, labels, relative, locale, now });

  return (
    <div className={clsx('denhaag-action__date', deadline && 'denhaag-action__date--warning')}>
      {deadline && <AlertTriangleFilledIcon className="denhaag-action__warning-icon" useDefaultClass={false} />}
      <Time dateTime={dateTime}>{formattedDate}</Time>
    </div>
  );
};
