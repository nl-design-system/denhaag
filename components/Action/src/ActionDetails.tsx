import React from 'react';
import { ActionDate, ActionActions } from './index';

interface ActionDetailsProps {
  children?: React.ReactNode;
  dateTime?: string;
  relativeDate?: boolean;
}

export const ActionDetails = ({ children, dateTime, relativeDate }: ActionDetailsProps) => {
  return (
    <div className="denhaag-action__details">
      {dateTime && <ActionDate dateTime={dateTime} relative={relativeDate} />}
      <ActionActions>{children}</ActionActions>
    </div>
  );
};
