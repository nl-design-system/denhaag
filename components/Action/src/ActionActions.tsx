import React from 'react';
import clsx from 'clsx';

import { ActionsProps, ActionDate } from './index';

export const ActionActions = ({ children, actions, deadline, relativeDate, className, ...rest }: ActionsProps) => {
  return (
    <div className={clsx('denhaag-action', className)} {...rest}>
      <div className="denhaag-action__content">{children}</div>
      <div className="denhaag-action__details">
        {deadline && <ActionDate date={deadline} relative={relativeDate} />}
        <div className="denhaag-action__actions">{actions}</div>
      </div>
    </div>
  );
};
