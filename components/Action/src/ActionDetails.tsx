import React from 'react';
import { ActionDate, ActionActions } from './index';

interface ActionDetailsProps {
  children?: React.ReactNode;
  deadline?: Date;
  relativeDate?: boolean;
}

export const ActionDetails = ({ children, deadline, relativeDate }: ActionDetailsProps) => {
  return (
    <div className="denhaag-action__details">
      {deadline && <ActionDate date={deadline} relative={relativeDate} />}
      <ActionActions>{children}</ActionActions>
    </div>
  );
};
