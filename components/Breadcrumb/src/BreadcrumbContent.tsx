import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';

export type BreadcrumbContentProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbContent = ({ className, children, ...props }: BreadcrumbContentProps) => {
  const classNames = clsx('denhaag-breadcrumb__content', className);

  return (
    <ResponsiveContent className={classNames} {...props}>
      {children}
    </ResponsiveContent>
  );
};

export default BreadcrumbContent;
