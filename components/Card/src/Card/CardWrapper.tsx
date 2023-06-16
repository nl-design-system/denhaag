import React, { HTMLAttributes } from 'react';
import './card.scss';
import clsx from 'clsx';

export interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const CardWrapper: React.FC<CardWrapperProps> = ({ className, ...props }) => {
  const classNames = clsx('denhaag-card__wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default CardWrapper;
