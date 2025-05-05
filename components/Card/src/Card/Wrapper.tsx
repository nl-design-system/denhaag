import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type WrapperProps = HTMLAttributes<HTMLDivElement>;

export const Wrapper = ({ className, ...props }: WrapperProps) => {
  const classNames = clsx('denhaag-case-card__wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default Wrapper;
