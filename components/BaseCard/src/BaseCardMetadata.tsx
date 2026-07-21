import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardContextProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardMetadata = ({ className, ...props }: BaseCardContextProps) => {
  const classNames = clsx('denhaag-base-card__context', className);
  return <div className={classNames} {...props}></div>;
};

export default BaseCardMetadata;
