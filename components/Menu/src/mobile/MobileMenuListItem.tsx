import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MobileMenuListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
}

export const MobileMenuListItem = ({ active, children, ...props }: MobileMenuListItemProps) => {
  const classNames = clsx('denhaag-mobile-menu-list-item', active ? 'denhaag-mobile-menu-list-item--active' : '');

  return (
    <li {...props} className={classNames}>
      {children}
    </li>
  );
};

export default MobileMenuListItem;
