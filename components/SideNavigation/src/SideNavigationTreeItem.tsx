import React, { ReactNode } from 'react';
import { SideNavigationItem } from './SideNavigationItem';
import { SideNavigationLink } from './SideNavigationLink';
import { SideNavigationLinkLabel } from './SideNavigationLinkLabel';
import { NumberBadge } from '@gemeente-denhaag/number-badge';

export interface SideNavigationTreeItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  current?: boolean;
  counter?: number;
}

export const SideNavigationTreeItem = (props: SideNavigationTreeItemProps) => {
  return (
    <SideNavigationItem>
      <SideNavigationLink href={props.href} current={props.current}>
        {props.icon}
        {props.counter && props.counter > 0 ? (
          <SideNavigationLinkLabel>
            {props.label}
            <NumberBadge>{props.counter}</NumberBadge>
          </SideNavigationLinkLabel>
        ) : (
          props.label
        )}
      </SideNavigationLink>
    </SideNavigationItem>
  );
};

export default SideNavigationTreeItem;
