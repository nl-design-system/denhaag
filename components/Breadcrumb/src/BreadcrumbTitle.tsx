import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbTitleProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbTitle = ({ children, className, ...props }: BreadcrumbTitleProps) => {
  const classNames = clsx('denhaag-breadcrumb__title', className);

  return (
    <span {...props} className={classNames}>
      {children}
    </span>
  );
};

export default BreadcrumbTitle;
