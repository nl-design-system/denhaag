import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => {
  const classNames = clsx('denhaag-card', className);
  return <div className={classNames} {...props}></div>;
};

export default Card;
