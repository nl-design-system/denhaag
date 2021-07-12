import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';

export const Menu: React.FC<BaseProps> = (props: BaseProps) => {
  return <span>{props.children}</span>;
};

export default Menu;
export * from './MenuButton';
