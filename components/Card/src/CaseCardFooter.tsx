import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CaseCardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CaseCardFooter = ({ className, ...props }: CaseCardFooterProps) => {
  const classNames = clsx('denhaag-case-card__footer', className);
  return <div className={classNames} {...props}></div>;
};

export default CaseCardFooter;
