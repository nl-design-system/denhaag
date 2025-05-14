import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbNavigationProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbNavigation = ({ className, ...props }: BreadcrumbNavigationProps) => {
  const classNames = clsx('denhaag-breadcrumb', className);
  return <nav aria-label="Breadcrumb" className={classNames} {...props} />;
};

export default BreadcrumbNavigation;
