import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { BasicLink } from '@gemeente-denhaag/link';
import clsx from 'clsx';

export interface BaseCardActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Action?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const BaseCardAction = ({ className, children, Action = BasicLink, ...props }: BaseCardActionProps) => {
  const classNames = clsx('denhaag-base-card__action', className);

  return (
    <Action {...props} className={classNames}>
      {children}
    </Action>
  );
};

export default BaseCardAction;
