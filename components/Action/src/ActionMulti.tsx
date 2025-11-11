import React from 'react';
import clsx from 'clsx';
import { ActionMultiProps } from './Action';
import { ActionContent } from './ActionContent';
import { ActionDetails } from './ActionDetails';
import { ActionActions } from './ActionActions';
import { ActionContext } from './ActionContext';

export const ActionMulti = ({
  children,
  details,
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
      <ActionContext>
        <ActionDetails dateTime={dateTime} now={now} locale={locale} relativeDate={relativeDate} labels={labels}>
          {details}
        </ActionDetails>
        <ActionActions>{actions}</ActionActions>
      </ActionContext>
    </div>
  );
};
