import React from 'react';
import clsx from 'clsx';

import { ActionSingleProps, ActionContent, ActionDetails } from './index';

export const ActionSingle = ({ children, link, deadline, relativeDate, className, ...rest }: ActionSingleProps) => {
  return (
    <a href={link} className={clsx('denhaag-action denhaag-action--single', className)} {...rest}>
      <ActionContent>{children}</ActionContent>
      <ActionDetails deadline={deadline} relativeDate={relativeDate} />
    </a>
  );
};
