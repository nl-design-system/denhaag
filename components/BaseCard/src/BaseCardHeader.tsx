import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardHeader = ({ className, ...props }: BaseCardHeaderProps) => {
  const classNames = clsx('denhaag-base-card__header', className);
  return <div className={classNames} {...props} />;
};

export default BaseCardHeader;
