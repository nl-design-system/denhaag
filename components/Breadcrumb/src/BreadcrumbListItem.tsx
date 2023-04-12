import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export interface BreadcrumbListItemProps extends LiHTMLAttributes<HTMLLIElement> {}

export const BreadcrumbListItem: React.FC<BreadcrumbListItemProps> = (props: BreadcrumbListItemProps) => {
  const { hidden, ...otherProps } = props;
  const classNames = clsx('denhaag-breadcrumb__item', hidden ? 'denhaag-breadcrumb__item--hidden' : '');
  return (
    <li {...otherProps} className={classNames}>
      {props.children}
    </li>
  );
};

export default BreadcrumbListItem;
