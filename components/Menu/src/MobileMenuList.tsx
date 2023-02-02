import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MobileMenuListProps extends HTMLAttributes<HTMLUListElement> {}

export const MenuItem: React.FC<MobileMenuListProps> = ({ children, ...props }) => {
  const classNames = clsx('denhaag-mobile-menu-list');

  return (
    <ul {...props} className={classNames}>
      {children}
    </ul>
  );
};

export default MenuItem;
