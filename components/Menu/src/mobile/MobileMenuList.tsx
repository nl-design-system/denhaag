import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MobileMenuListProps extends HTMLAttributes<HTMLUListElement> {
  expandable?: boolean;
  active?: boolean;
}

export const MobileMenuList: React.FC<MobileMenuListProps> = ({ expandable, active, children, ...props }) => {
  const classNames = clsx(
    'denhaag-mobile-menu-list',
    expandable && 'denhaag-mobile-menu-list-expandable',
    active && 'denhaag-mobile-menu-list-expandable--open',
  );

  return (
    <ul {...props} className={classNames}>
      {children}
    </ul>
  );
};

export default MobileMenuList;
