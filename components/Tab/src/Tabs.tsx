import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { TabIndicator } from './TabIndicator';
import { TabsContainer } from './TabsContainer';
import './styles/_tabs.scss';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Callback fired when the value changes.
   * @param event The event source of the callback
   * @param value Defaults to the index of the child (number)
   */
  onTabChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tabs component.
 * @constructor Constructs an instance of Tabs.
 */
export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const rootClassNames = clsx('denhaag-tabs', props.className);
  return (
    <div className={rootClassNames}>
      <TabsContainer>{props.children}</TabsContainer>
      <TabIndicator />
    </div>
  );
};

export default Tabs;
