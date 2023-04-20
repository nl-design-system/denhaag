import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MobileSubMenuProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ active, children, ...props }) => {
  const classNames = clsx('denhaag-mobile-menu-list-submenu', active ? 'denhaag-mobile-menu-list-submenu--open' : '');

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};

export default MobileSubMenu;
