import React from 'react';
import { SideNavigationBase } from './SideNavigationBase';
import { SideNavigationList } from './SideNavigationList';
import { SideNavigationTreeItem, SideNavigationTreeItemProps } from './SideNavigationTreeItem';

export interface SideNavigationProps {
  openLabel?: string;
  closeLabel?: string;
  items: SideNavigationTreeItemProps[][];
}

export const SideNavigation = ({ items, openLabel, closeLabel }: SideNavigationProps) => {
  return (
    <SideNavigationBase>
      {items.map((item, index) => (
        <SideNavigationList key={index}>
          {item.map((subItem, subIndex) => (
            <SideNavigationTreeItem key={subIndex} {...subItem} openLabel={openLabel} closeLabel={closeLabel} />
          ))}
        </SideNavigationList>
      ))}
    </SideNavigationBase>
  );
};
