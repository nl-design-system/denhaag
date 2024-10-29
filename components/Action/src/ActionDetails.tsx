import React from 'react';
import { ActionDate, ActionActions } from './index';
import { FormatDateLabels } from '@gemeente-denhaag/utils';

interface ActionDetailsProps {
  children?: React.ReactNode;
  dateTime?: string;
  now?: string;
  locale?: string;
  relativeDate?: boolean;
  labels: FormatDateLabels;
}

export const ActionDetails = ({ children, dateTime, now, locale, relativeDate, labels }: ActionDetailsProps) => {
  return (
    <div className="denhaag-action__details">
      {dateTime && <ActionDate dateTime={dateTime} now={now} locale={locale} relative={relativeDate} labels={labels} />}
      <ActionActions>{children}</ActionActions>
    </div>
  );
};
