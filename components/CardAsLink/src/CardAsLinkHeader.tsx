import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardAsLinkHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkHeader = ({ className, ...props }: CardAsLinkHeaderProps) => {
  const classNames = clsx('denhaag-card-as-link__header', className);
  return <div className={classNames} {...props} />;
};

export default CardAsLinkHeader;
