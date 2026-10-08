import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CardAsLinkPreHeaderProps = HTMLAttributes<HTMLDivElement> & {
  visuallyFirst?: boolean;
};

export const CardAsLinkPreHeader = ({ className, visuallyFirst, ...props }: CardAsLinkPreHeaderProps) => {
  const classNames = clsx(
    'denhaag-card-as-link__pre-header',
    { 'denhaag-card-as-link__pre-header--visually-first': visuallyFirst },
    className,
  );
  return <div className={classNames} {...props} />;
};

export default CardAsLinkPreHeader;
