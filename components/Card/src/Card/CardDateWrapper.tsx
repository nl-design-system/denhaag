import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CardDateWrapperProps = HTMLAttributes<HTMLDivElement>;

export const CardDateWrapper = ({ className, ...props }: CardDateWrapperProps) => {
  const classNames = clsx('denhaag-card__date-wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default CardDateWrapper;
