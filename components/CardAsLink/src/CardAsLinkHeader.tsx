import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardAsLinkHeaderProps = HTMLAttributes<HTMLElement>;

export const CardAsLinkHeader = ({ className, children, ...props }: PropsWithChildren<CardAsLinkHeaderProps>) => {
  const classNames = clsx('denhaag-card-as-link__header', className);
  return (
    <header className={classNames} {...props}>
      {children}
    </header>
  );
};

export default CardAsLinkHeader;
