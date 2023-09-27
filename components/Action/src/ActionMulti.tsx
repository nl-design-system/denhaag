import React from 'react';
import clsx from 'clsx';

import { ActionMultiProps, ActionContent, ActionDetails } from './index';

export const ActionMulti = ({ children, actions, dateTime, relativeDate, className, ...rest }: ActionMultiProps) => {
  return (
    <div className={clsx('denhaag-action', className)} {...rest}>
      <ActionContent>{children}</ActionContent>
      <ActionDetails dateTime={dateTime} relativeDate={relativeDate}>
        {actions}
      </ActionDetails>
    </div>
  );
};
