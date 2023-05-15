import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export interface BreadcrumbListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

export const BreadcrumbListItem: React.FC<BreadcrumbListItemProps> = ({
  hidden,
  className,
  ...props
}: BreadcrumbListItemProps) => {
  const classNames = clsx('denhaag-breadcrumb__item', hidden ? 'denhaag-breadcrumb__item--hidden' : '', className);
  return (
    <li {...props} className={classNames}>
      {props.children}
    </li>
  );
};

export default BreadcrumbListItem;
