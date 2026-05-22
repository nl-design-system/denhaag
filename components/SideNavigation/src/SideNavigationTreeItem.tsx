import React, { ReactNode, useId, useState } from 'react';
import { SideNavigationItem } from './SideNavigationItem';
import { SideNavigationLink } from './SideNavigationLink';
import { SideNavigationLinkLabel } from './SideNavigationLinkLabel';
import { SideNavigationList } from './SideNavigationList';
import { SideNavigationExpandButton } from './SideNavigationExpandButton';
import { SideNavigationExpandSeparator } from './SideNavigationExpandSeparator';
import { NumberBadge } from '@gemeente-denhaag/number-badge';

export interface SideNavigationTreeItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  current?: boolean;
  counter?: number;
  expanded?: boolean;
  items?: SideNavigationTreeItemProps[];
}

export const SideNavigationTreeItem = (props: SideNavigationTreeItemProps) => {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState<boolean>(Boolean(props.expanded));

  const togglePanel = () => setIsExpanded(!isExpanded);

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

      {props.items?.length && (
        <>
          <SideNavigationExpandSeparator />
          <SideNavigationExpandButton onClick={togglePanel} aria-expanded={isExpanded} />
          {isExpanded && (
            <SideNavigationList id={id}>
              {props.items.map((subItem, subIndex) => (
                <SideNavigationTreeItem key={subIndex} {...subItem} />
              ))}
            </SideNavigationList>
          )}
        </>
      )}
    </SideNavigationItem>
  );
};

export default SideNavigationTreeItem;
