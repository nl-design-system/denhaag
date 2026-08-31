import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardDecorationProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardDecoration = ({ className, ...props }: BaseCardDecorationProps) => {
  const classNames = clsx('denhaag-base-card__decoration', className);

  return <div className={classNames} {...props}></div>;
};

export default BaseCardDecoration;
