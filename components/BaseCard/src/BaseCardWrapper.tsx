import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type BaseCardWrapperProps = HTMLAttributes<HTMLDivElement>;

export const BaseCardWrapper = ({ className, ...props }: BaseCardWrapperProps) => {
  const classNames = clsx('denhaag-base-card__wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default BaseCardWrapper;
