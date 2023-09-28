import React from 'react';
import { ActionDate, ActionActions } from './index';

interface ActionDetailsProps {
  children?: React.ReactNode;
  dateTime?: string;
  now?: string;
  relativeDate?: boolean;
}

export const ActionDetails = ({ children, dateTime, now, relativeDate }: ActionDetailsProps) => {
  return (
    <div className="denhaag-action__details">
      {dateTime && <ActionDate dateTime={dateTime} now={now} relative={relativeDate} />}
      <ActionActions>{children}</ActionActions>
    </div>
  );
};
