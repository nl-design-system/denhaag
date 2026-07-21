import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardBodyProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardBody = ({ className, ...props }: BaseCardBodyProps) => {
  const classNames = clsx('denhaag-base-card__body', className);
  return <div className={classNames} {...props} />;
};

export default BaseCardBody;
