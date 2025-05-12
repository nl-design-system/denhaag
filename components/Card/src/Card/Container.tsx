import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...props }: ContainerProps) => {
  const classNames = clsx('denhaag-case-card__container', className);
  return <div className={classNames} {...props}></div>;
};

export default Container;
