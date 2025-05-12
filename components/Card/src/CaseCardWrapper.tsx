import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CaseCardWrapperProps = HTMLAttributes<HTMLDivElement>;

export const CaseCardWrapper = ({ className, ...props }: CaseCardWrapperProps) => {
  const classNames = clsx('denhaag-case-card__wrapper', className);
  return <div className={classNames} {...props}></div>;
};

export default CaseCardWrapper;
