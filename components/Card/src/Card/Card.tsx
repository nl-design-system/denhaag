import React, { HTMLAttributes } from 'react';
import './card.scss';
import clsx from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  const classNames = clsx('denhaag-card', className);
  return <div className={classNames} {...props}></div>;
};

export default Card;
