import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type BackgroundProps = HTMLAttributes<HTMLDivElement>;

export const Background = ({ className, ...props }: BackgroundProps) => {
  const classNames = clsx('denhaag-case-card__background', className);
  return <div className={classNames} {...props}></div>;
};

export default Background;
