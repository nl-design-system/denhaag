import React from 'react';
import clsx from 'clsx';

import { ActionMultiProps, ActionContent, ActionDetails } from './index';

export const ActionMulti = ({
  children,
  actions,
  dateTime,
  now,
  relativeDate,
  className,
  ...rest
}: ActionMultiProps) => {
  return (
    <div className={clsx('denhaag-action', className)} {...rest}>
      <ActionContent>{children}</ActionContent>
      <ActionDetails dateTime={dateTime} now={now} relativeDate={relativeDate}>
        {actions}
      </ActionDetails>
    </div>
  );
};
