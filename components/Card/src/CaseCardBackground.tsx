import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CaseCardBackgroundProps = HTMLAttributes<HTMLDivElement>;

export const CaseCardBackground = ({ className, ...props }: CaseCardBackgroundProps) => {
  const classNames = clsx('denhaag-case-card__background', className);
  return <div className={classNames} {...props}></div>;
};

export default CaseCardBackground;
