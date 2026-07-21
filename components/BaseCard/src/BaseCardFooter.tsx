import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardFooterProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardFooter = ({ className, ...props }: BaseCardFooterProps) => {
  const classNames = clsx('denhaag-base-card__footer', className);
  return <div className={classNames} {...props}></div>;
};

export default BaseCardFooter;
