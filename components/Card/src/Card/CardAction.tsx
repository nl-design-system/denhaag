import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import BasicLink from '@gemeente-denhaag/link';
import clsx from 'clsx';
import '../index.scss';

export interface CardActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Action?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const CardAction = ({ className, children, Action = BasicLink, ...props }: CardActionProps) => {
  const classNames = clsx('denhaag-card__action-link', className);

  return (
    <Action {...props} className={classNames}>
      {children}
    </Action>
  );
};

export default CardAction;
