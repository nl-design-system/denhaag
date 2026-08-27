import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardPreHeaderProps = HTMLAttributes<HTMLDivElement> & {
  visuallyFirst?: boolean;
};

export const BaseCardPreHeader = ({ className, visuallyFirst, ...props }: BaseCardPreHeaderProps) => {
  const classNames = clsx(
    'denhaag-base-card__pre-header',
    { 'denhaag-base-card__pre-header--visually-first': visuallyFirst },
    className,
  );
  return <div className={classNames} {...props} />;
};

export default BaseCardPreHeader;
