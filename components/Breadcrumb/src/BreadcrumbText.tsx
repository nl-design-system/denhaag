import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbTextProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbText = ({ children, className, ...props }: BreadcrumbTextProps) => {
  const classNames = clsx('denhaag-breadcrumb__text', className);

  return (
    <span {...props} className={classNames}>
      {children}
    </span>
  );
};

export default BreadcrumbText;
