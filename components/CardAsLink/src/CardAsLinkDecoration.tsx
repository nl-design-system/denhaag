import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardAsLinkDecorationProps = HTMLAttributes<HTMLDivElement>;

export const CardAsLinkDecoration = ({ className, ...props }: CardAsLinkDecorationProps) => {
  const classNames = clsx('denhaag-card-as-link__decoration', className);

  return <div className={classNames} {...props}></div>;
};

export default CardAsLinkDecoration;
