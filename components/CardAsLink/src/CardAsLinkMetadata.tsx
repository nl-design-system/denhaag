import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardAsLinkContextProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkMetadata = ({ className, ...props }: CardAsLinkContextProps) => {
  const classNames = clsx('denhaag-card-as-link__context', className);
  return <div className={classNames} {...props}></div>;
};

export default CardAsLinkMetadata;
