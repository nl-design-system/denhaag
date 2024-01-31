import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export interface CardBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBackground = ({ className, ...props }: CardBackgroundProps) => {
  const classNames = clsx('denhaag-card__background', className);
  return <div className={classNames} {...props}></div>;
};

export default CardBackground;
