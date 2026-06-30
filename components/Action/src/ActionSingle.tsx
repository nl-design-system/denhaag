import React from 'react';
import clsx from 'clsx';
import { ActionSingleProps } from './Action';
import { ActionContent } from './ActionContent';
import { ActionDetails } from './ActionDetails';
import { BasicLink } from '@gemeente-denhaag/link';
import { ActionActions } from './ActionActions';
import { ActionContext } from './ActionContext';
import { ActionIndicator } from './ActionIndicator';

export const ActionSingle = ({
  children,
  link,
  Link = BasicLink,
  details,
  dateTime,
  now,
  locale,
  relativeDate,
  labels,
  indicator,
  hasIndicator = false,
  className,
  ...rest
}: ActionSingleProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        'denhaag-action denhaag-action--single',
        hasIndicator && 'denhaag-action--with-indicator',
        className,
      )}
      {...rest}
    >
      <div className="denhaag-action__row">
        <ActionIndicator>{indicator}</ActionIndicator>
        <ActionContent>{children}</ActionContent>
      </div>
      <ActionContext>
        <ActionDetails dateTime={dateTime} now={now} locale={locale} relativeDate={relativeDate} labels={labels}>
          {details}
        </ActionDetails>
        <ActionActions />
      </ActionContext>
    </Link>
  );
};
