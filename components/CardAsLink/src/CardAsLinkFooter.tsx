import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardAsLinkFooterProps = HTMLAttributes<HTMLElement>;

export const CardAsLinkFooter = ({ className, children, ...props }: PropsWithChildren<CardAsLinkFooterProps>) => {
  const classNames = clsx('denhaag-card-as-link__footer', className);
  return (
    <footer className={classNames} {...props}>
      {children}
    </footer>
  );
};

export default CardAsLinkFooter;
