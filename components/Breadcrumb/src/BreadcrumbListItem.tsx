import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export interface BreadcrumbListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  collapse?: boolean;
}

export const BreadcrumbListItem: React.FC<BreadcrumbListItemProps> = (props: BreadcrumbListItemProps) => {
  const { collapse, ...otherProps } = props;
  const classNames = clsx('denhaag-breadcrumb__item', collapse ? 'denhaag-breadcrumb__item--hidden' : '');
  return (
    <li {...otherProps} className={classNames}>
      {props.children}
    </li>
  );
};

export default BreadcrumbListItem;
