import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
  const classNames = clsx('denhaag-menu-item');

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};

export default MenuItem;
