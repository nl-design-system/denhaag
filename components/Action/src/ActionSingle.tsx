import React from 'react';
import clsx from 'clsx';

import { ActionSingleProps, ActionContent, ActionDetails } from './index';

export const ActionSingle = ({
  children,
  link,
  dateTime,
  now,
  relativeDate,
  className,
  ...rest
}: ActionSingleProps) => {
  return (
    <a href={link} className={clsx('denhaag-action denhaag-action--single', className)} {...rest}>
      <ActionContent>{children}</ActionContent>
      <ActionDetails dateTime={dateTime} now={now} relativeDate={relativeDate} />
    </a>
  );
};
