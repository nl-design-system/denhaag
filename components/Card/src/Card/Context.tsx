import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type ContextProps = HTMLAttributes<HTMLDivElement>;

export const Context = ({ className, ...props }: ContextProps) => {
  const classNames = clsx('denhaag-case-card__context', className);
  return <div className={classNames} {...props}></div>;
};

export default Context;
