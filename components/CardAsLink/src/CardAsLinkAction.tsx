import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { BasicLink } from '@gemeente-denhaag/link';
import clsx from 'clsx';

export interface CardAsLinkActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Action?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const CardAsLinkAction = ({ className, children, Action = BasicLink, ...props }: CardAsLinkActionProps) => {
  const classNames = clsx('denhaag-card-as-link__action', className);

  return (
    <Action {...props} className={classNames}>
      {children}
    </Action>
  );
};

export default CardAsLinkAction;
