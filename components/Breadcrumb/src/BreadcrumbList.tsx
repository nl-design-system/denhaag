import React, { OlHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbListProps = OlHTMLAttributes<HTMLOListElement>;

export const BreadcrumbList = ({ children, className, ...props }: BreadcrumbListProps) => {
  const classNames = clsx('denhaag-breadcrumb__list', className);

  return (
    <ol {...props} className={classNames}>
      {children}
    </ol>
  );
};

export default BreadcrumbList;
