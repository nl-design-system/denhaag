import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import BasicLink from '@gemeente-denhaag/link';
import clsx from 'clsx';
import '../index.scss';

export interface ActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Action?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const Action = ({ className, children, Action = BasicLink, ...props }: ActionProps) => {
  const classNames = clsx('denhaag-case-card__action', className);

  return (
    <Action {...props} className={classNames}>
      {children}
    </Action>
  );
};

export default Action;
