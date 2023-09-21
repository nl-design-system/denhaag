import React from 'react';
import clsx from 'clsx';

import { LinkProps, ActionDate } from './index';
import { ArrowRightIcon } from '/components/Icons/src';

export const ActionLink = ({ children, link, deadline, relativeDate, className, ...rest }: LinkProps) => {
  return (
    <a href={link} className={clsx('denhaag-action denhaag-action--link', className)} {...rest}>
      <div className="denhaag-action__content">{children}</div>
      <div className="denhaag-action__details">
        {deadline && <ActionDate date={deadline} relative={relativeDate} />}
        <div className="denhaag-action__actions">
          <ArrowRightIcon className="denhaag-action__link-icon" />
        </div>
      </div>
    </a>
  );
};
