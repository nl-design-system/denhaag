import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type CardAsLinkPreHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkPreHeader = ({ className, children, ...props }: PropsWithChildren<CardAsLinkPreHeaderProps>) => {
  const classNames = clsx('denhaag-card-as-link__pre-header', className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default CardAsLinkPreHeader;
