import React from 'react';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';

interface ActionsActionsProps {
  children?: React.ReactNode;
}

export const ActionActions = ({ children }: ActionsActionsProps) => {
  return (
    <div className="denhaag-action__actions">
      {children ? children : <ArrowRightIcon className="denhaag-action__link-icon" useDefaultClass={false} />}
    </div>
  );
};
