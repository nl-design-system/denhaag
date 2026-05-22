import React from 'react';
import { SideNavigationBase } from './SideNavigationBase';
import { SideNavigationList } from './SideNavigationList';
import { SideNavigationTreeItem, SideNavigationTreeItemProps } from './SideNavigationTreeItem';

export interface SideNavigationProps {
  items: SideNavigationTreeItemProps[][];
}

export const SideNavigation = ({ items }: SideNavigationProps) => {
  return (
    <SideNavigationBase>
      {items.map((item, index) => (
        <SideNavigationList key={index}>
          {item.map((subItem, subIndex) => (
            <SideNavigationTreeItem key={subIndex} {...subItem} />
          ))}
        </SideNavigationList>
      ))}
    </SideNavigationBase>
  );
};
