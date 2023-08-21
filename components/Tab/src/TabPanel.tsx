import React, { HTMLAttributes } from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';
import './styles/_tab-panel.scss';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

/**
 * A wrapper for the selected Tab component in a Tabs component.
 * @param props The properties of a TabPanel component.
 * @constructor Constructs an instance of TabPanel.
 */
export const TabPanel: React.FC<TabPanelProps> = ({ selected, className, children, ...props }: TabPanelProps) => {
  const rootClassNames = clsx(className, 'denhaag-tabs__tab-panel', selected && 'denhaag-tabs__tab-panel--active');
  return (
    <div {...props} role="tabpanel" className={rootClassNames}>
      {children}
    </div>
  );
};

export default TabPanel;
