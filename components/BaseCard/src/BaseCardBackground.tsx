import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardBackgroundProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardBackground = ({ className, ...props }: BaseCardBackgroundProps) => {
  const classNames = clsx('denhaag-base-card__background', className);
  return <div className={classNames} {...props}></div>;
};

export default BaseCardBackground;
