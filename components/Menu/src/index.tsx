import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';
import './_menu.scss';

export const Menu: React.FC<BaseProps> = (props: Omit<BaseProps, 'classes'>) => {
  const rootClassNames = clsx('denhaag-menu', props.className);
  return (
    <div className={rootClassNames} id={props.id}>
      {props.children}
    </div>
  );
};

export default Menu;
export * from './MenuButton';
export * from './mobile/MobileMenu';

export * from './mobile/MobileMenuList';
export * from './mobile/MobileMenuListItem';
export * from './mobile/MobileSubMenu';
