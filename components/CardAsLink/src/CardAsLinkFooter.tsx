import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardAsLinkFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkFooter = ({ className, ...props }: CardAsLinkFooterProps) => {
  const classNames = clsx('denhaag-card-as-link__footer', className);
  return <div className={classNames} {...props}></div>;
};

export default CardAsLinkFooter;
