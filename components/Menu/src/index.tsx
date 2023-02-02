import React from 'react';
import './menu.scss';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';

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
export * from './MobileMenu';
