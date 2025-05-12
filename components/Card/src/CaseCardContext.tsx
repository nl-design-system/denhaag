import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CaseCardContextProps = HTMLAttributes<HTMLDivElement>;

export const CaseCardContext = ({ className, ...props }: CaseCardContextProps) => {
  const classNames = clsx('denhaag-case-card__context', className);
  return <div className={classNames} {...props}></div>;
};

export default CaseCardContext;
