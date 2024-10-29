import React from 'react';
import clsx from 'clsx';

import { ActionMultiProps, ActionContent, ActionDetails } from './index';

export const ActionMulti = ({
  children,
  actions,
  dateTime,
  now,
  locale,
  relativeDate,
  labels,
  className,
  ...rest
}: ActionMultiProps) => {
  return (
    <div className={clsx('denhaag-action denhaag-action--multi', className)} {...rest}>
      <ActionContent>{children}</ActionContent>
      <ActionDetails dateTime={dateTime} now={now} locale={locale} relativeDate={relativeDate} labels={labels}>
        {actions}
      </ActionDetails>
    </div>
  );
};
