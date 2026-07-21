import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardAsLinkBodyProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkBody = ({ className, ...props }: CardAsLinkBodyProps) => {
  const classNames = clsx('denhaag-card-as-link__body', className);
  return <div className={classNames} {...props} />;
};

export default CardAsLinkBody;
