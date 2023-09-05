import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export interface CardDateWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const CardDateWrapper: React.FC<CardDateWrapperProps> = ({ className, ...props }) => {
  const classNames = clsx('denhaag-card__date-wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default CardDateWrapper;
