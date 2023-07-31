import React, { useState } from 'react';
import { TabsContainer } from './TabsContainer';
import { TabIndicator } from './TabIndicator';
import { HTMLAttributes } from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';
import { TabText } from './TabText';

export * from './Tab';
export * from './TabPanel';
export * from './Tabs';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Callback fired when the value changes.
   * @param event The event source of the callback
   * @param value Defaults to the index of the child (number)
   */
  onTabChange?: (event: React.ChangeEvent<unknown>, value: number) => void;

  tabData: Array<{ label: string; panelContent: React.ReactNode }>;
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tabs component.
 * @constructor Constructs an instance of Tabs.
 */
export const TabsLogic: React.FC<TabsProps> = ({ tabData, ...props }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const generateTabsData = () => {
    const tabs: Array<React.ReactNode> = [];
    const tabPanels: Array<React.ReactNode> = [];

    tabData.forEach((tab, index) => {
      tabs.push(
        <Tab key={`tab-${index}`} value={index} selected={selectedTab === index} onClick={() => handleTabChange(index)}>
          <TabText>{tab.label}</TabText>
        </Tab>,
      );
      tabPanels.push(
        <TabPanel key={`tab-panel-${index}`} value={index} selected={selectedTab === index}>
          {tab.panelContent}
        </TabPanel>,
      );
    });

    return { tabs, tabPanels };
  };

  const { tabs, tabPanels } = generateTabsData();

  return (
    <>
      <Tabs>
        <TabsContainer>{tabs}</TabsContainer>
        <TabIndicator style={{ left: `${selectedTab * 176}px`, width: '176px' }} />
      </Tabs>
      {tabPanels}
    </>
  );
};

export default TabsLogic;
