import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CardWrapperProps = HTMLAttributes<HTMLDivElement>;

export const CardWrapper = ({ className, ...props }: CardWrapperProps) => {
  const classNames = clsx('denhaag-card__wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default CardWrapper;
