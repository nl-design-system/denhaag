import React, { ReactNode } from 'react';
import { SideNavigationBase } from './SideNavigationBase';
import { SideNavigationList } from './SideNavigationList';
import { SideNavigationItem } from './SideNavigationItem';
import { SideNavigationLink } from './SideNavigationLink';
import { SideNavigationLinkLabel } from './SideNavigationLinkLabel';
import { NumberBadge } from '@gemeente-denhaag/number-badge';

export interface SideNavigationProps {
  items: {
    href: string;
    label: string;
    icon: ReactNode;
    current?: boolean;
    counter?: number;
  }[][];
}

export const SideNavigation = ({ items }: SideNavigationProps) => {
  return (
    <SideNavigationBase>
      {items.map((item, index) => (
        <SideNavigationList key={index}>
          {item.map((subItem, subIndex) => (
            <SideNavigationItem key={subIndex}>
              <SideNavigationLink href={subItem.href} current={subItem.current}>
                {subItem.icon}
                {subItem.counter && subItem.counter > 0 ? (
                  <SideNavigationLinkLabel>
                    {subItem.label}
                    <NumberBadge>{subItem.counter}</NumberBadge>
                  </SideNavigationLinkLabel>
                ) : (
                  subItem.label
                )}
              </SideNavigationLink>
            </SideNavigationItem>
          ))}
        </SideNavigationList>
      ))}
    </SideNavigationBase>
  );
};
