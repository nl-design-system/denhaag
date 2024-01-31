import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export interface CardTextWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const CardTextWrapper = ({ className, ...props }: CardTextWrapperProps) => {
  const classNames = clsx('denhaag-card__text-wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default CardTextWrapper;
