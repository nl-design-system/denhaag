import React, { KeyboardEvent, Ref, RefObject, createRef, useEffect, useState } from 'react';
import { TabsContainer } from './TabsContainer';
import { TabIndicator } from './TabIndicator';
import { HTMLAttributes } from 'react';
import { TabList } from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';
import { TabText } from './TabText';
import { v4 as uuidv4 } from 'uuid';

export * from './Tab';
export * from './TabPanel';
export * from './TabList';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabData: Array<{ label: string; panelContent: React.ReactNode; defaultSelected?: boolean }>;
}

type TabRef = RefObject<HTMLDivElement>;

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tabs component.
 * @constructor Constructs an instance of Tabs.
 */
export const Tabs: React.FC<TabsProps> = ({ tabData }: TabsProps) => {
  const [tabs] = useState(
    tabData.map((tab) => {
      const tabRef = createRef<HTMLDivElement>();
      const id = uuidv4();
      const tabId = `tab-${id}`;
      const tabPanelId = `tabpanel-${id}`;

      return { tab, tabRef, tabId, tabPanelId };
    }),
  );

  const [selectedTab, setSelectedTab] = useState<TabRef | undefined>(() => {
    const defaultTab = tabs.find((tab) => tab.tab.defaultSelected);
    return defaultTab ? defaultTab.tabRef : undefined;
  });

  const [focussedTab, setFocussedTab] = useState<TabRef | undefined>();

  const handleTabChange = (event: any, tabRef: TabRef) => {
    event.preventDefault();
    setSelectedTab(tabRef);
    setFocussedTab(tabRef);
  };

  useEffect(() => {
    if (focussedTab !== undefined) {
      focussedTab?.current?.focus();
    }
  }, [focussedTab]);

  const findNextOrFirst = <T,>(array: T[], callback: (item: T, index: number) => boolean): T => {
    const index = array.findIndex(callback);
    return array[index === array.length - 1 ? 0 : index + 1];
  };

  const findPreviousOrLast = <T,>(array: T[], callback: (item: T, index: number) => boolean): T => {
    const index = array.findIndex(callback);
    return array[index === 0 ? array.length - 1 : index - 1];
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault(); //Prevent side scrolling
      setFocussedTab((prevFocussedTab) => {
        const tab = findNextOrFirst(tabs, ({ tabRef }) => tabRef === prevFocussedTab);
        return tab?.tabRef;
      });
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault(); //Prevent side scrolling
      setFocussedTab((prevFocussedTab) => {
        const tab = findPreviousOrLast(tabs, ({ tabRef }) => tabRef === prevFocussedTab);
        return tab?.tabRef;
      });
    } else if (event.key === 'Enter') {
      setSelectedTab(focussedTab);
    } else {
      return;
    }
  };

  const handleTabFocus = (tabRef: TabRef) => {
    setFocussedTab(tabRef);
  };

  //TODO fix it, retrieve coordinate
  const customStyles = {
    '--_denhaag-tabs-tab-indicator-inset-inline-start': `${
      selectedTab?.current?.offsetLeft
    }px`,
    '--_denhaag-tabs-tab-indicator-size': `${selectedTab?.current?.offsetWidth}px`,
  };
  console.log(selectedTab?.current?.offsetWidth);
  return (
    <>
      <TabsContainer>
        <TabList tabIndex={-1} onKeyDown={handleKeyDown}>
          {tabs.map(({ tab, tabRef, tabId, tabPanelId }) => (
            <Tab
              id={tabId}
              key={tabId}
              aria-controls={tabPanelId}
              tabIndex={selectedTab === tabRef ? 0 : -1}
              ref={tabRef}
              selected={selectedTab === tabRef}
              onClick={(event) => handleTabChange(event, tabRef)}
              onFocus={() => handleTabFocus(tabRef)}
            >
              <TabText>{tab.label}</TabText>
            </Tab>
          ))}
        </TabList>
        <TabIndicator style={customStyles as any} />
      </TabsContainer>
      {tabs.map(({ tab, tabRef, tabId, tabPanelId }) => (
        <TabPanel
          id={tabPanelId}
          key={tabPanelId}
          aria-labelledby={tabId}
          tabIndex={0}
          selected={selectedTab === tabRef}
          hidden={selectedTab !== tabRef}
        >
          {tab.panelContent}
        </TabPanel>
      ))}
    </>
  );
};

export default Tabs;
