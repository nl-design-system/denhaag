import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type CaseCardContainerProps = HTMLAttributes<HTMLDivElement>;

export const CaseCardContainer = ({ className, ...props }: CaseCardContainerProps) => {
  const classNames = clsx('denhaag-case-card__container', className);
  return <div className={classNames} {...props}></div>;
};

export default CaseCardContainer;
