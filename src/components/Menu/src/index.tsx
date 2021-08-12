import React from 'react';
import './menu.css';
import BaseProps from '@gemeente-denhaag/baseprops';

export const Menu: React.FC<BaseProps> = (props: BaseProps) => {
  return (
    <div className="denhaag-menu" id={props.id}>
      {props.children}
    </div>
  );
};

export default Menu;
export * from './MenuButton';
