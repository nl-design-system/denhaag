import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => {
  const classNames = clsx('denhaag-case-card', className);
  return <div className={classNames} {...props}></div>;
};

export default Card;
