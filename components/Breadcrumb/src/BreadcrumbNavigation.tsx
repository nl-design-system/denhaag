import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbNavigationProps = HTMLAttributes<HTMLDivElement>;

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = (props: BreadcrumbNavigationProps) => {
  const classNames = clsx('denhaag-breadcrumb', props.className);
  return (
    <nav aria-label="Breadcrumb" className={classNames}>
      {props.children}
    </nav>
  );
};

export default BreadcrumbNavigation;
