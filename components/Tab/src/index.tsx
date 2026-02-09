import React, { KeyboardEvent, RefObject, createRef, useEffect, useLayoutEffect, useState } from 'react';
import './index.scss';
import { TabsContainer } from './TabsContainer';
import { TabIndicator } from './TabIndicator';
import { TabList } from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';
import { TabText } from './TabText';
import { v4 as uuidv4 } from 'uuid';

export * from './Tab';
export * from './TabIndicator';
export * from './TabList';
export * from './TabPanel';
export * from './TabsContainer';
export * from './TabText';

export interface TabsProps {
  tabData: Array<{ label: string; panelContent: React.ReactNode }>;
  onChange?: (index: number) => void;
}

type TabRef = RefObject<HTMLDivElement | null>;

type TabIndicatorPosition = { left?: number; width?: number };

interface CustomCSSProperties extends React.CSSProperties {
  '--_denhaag-tabs-tab-indicator-inset-inline-start': string;
  '--_denhaag-tabs-tab-indicator-size': string;
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tabs component.
 * @constructor Constructs an instance of Tabs.
 */
export const Tabs = ({ tabData, onChange }: TabsProps) => {
  const [tabs, setTabs] = useState(
    tabData.map((tab) => {
      const tabRef = createRef<HTMLDivElement>();
      const id = uuidv4();
      const tabId = `tab-${id}`;
      const tabPanelId = `tabpanel-${id}`;

      return { tab, tabRef, tabId, tabPanelId };
    }),
  );

  const [selectedTab, setSelectedTab] = useState<TabRef | undefined>(() => {
    return tabs.length > 0 ? tabs[0].tabRef : undefined;
  });
  const [focussedTab, setFocussedTab] = useState<TabRef | undefined>();
  const [tabIndicatorPosition, setTabIndicatorPosition] = useState<TabIndicatorPosition>();

  useEffect(() => {
    setTabs(tabs.map((tab, index) => ({ ...tab, tab: { ...tabData[index] } })));
  }, [tabData]);

  useEffect(() => {
    if (focussedTab !== undefined) {
      focussedTab?.current?.focus();
    }
  }, [focussedTab]);

  useLayoutEffect(() => {
    if (!selectedTab?.current) return undefined;

    const updateIndicator = () => {
      if (!selectedTab?.current) return;
      setTabIndicatorPosition({
        left: selectedTab.current.offsetLeft,
        width: selectedTab.current.offsetWidth,
      });
    };

    const resizeObserver = new ResizeObserver(updateIndicator);
    resizeObserver.observe(selectedTab.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [selectedTab, tabs.length]);

  const findNextOrFirst = <T,>(array: T[], callback: (item: T, index: number) => boolean): T => {
    const index = array.findIndex(callback);
    return array[index === array.length - 1 ? 0 : index + 1];
  };

  const findPreviousOrLast = <T,>(array: T[], callback: (item: T, index: number) => boolean): T => {
    const index = array.findIndex(callback);
    return array[index === 0 ? array.length - 1 : index - 1];
  };

  const handleTabChange = (tabRef: TabRef) => {
    setSelectedTab(tabRef);
    setFocussedTab(tabRef);
    onChange?.(tabs.findIndex(({ tabRef: ref }) => ref === tabRef));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setFocussedTab((prevFocussedTab) => {
        const tab = findNextOrFirst(tabs, ({ tabRef }) => tabRef === prevFocussedTab);
        return tab?.tabRef;
      });
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setFocussedTab((prevFocussedTab) => {
        const tab = findPreviousOrLast(tabs, ({ tabRef }) => tabRef === prevFocussedTab);
        return tab?.tabRef;
      });
    } else if (event.key === 'Enter') {
      setSelectedTab(focussedTab);
    }
  };

  const handleTabFocus = (tabRef: TabRef) => {
    setFocussedTab(tabRef);
  };

  const customStyles: CustomCSSProperties = {
    '--_denhaag-tabs-tab-indicator-inset-inline-start': `${tabIndicatorPosition?.left ?? 0}px`,
    '--_denhaag-tabs-tab-indicator-size': `${tabIndicatorPosition?.width ?? 0}px`,
  };

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
              onClick={() => handleTabChange(tabRef)}
              onFocus={() => handleTabFocus(tabRef)}
            >
              <TabText>{tab.label}</TabText>
            </Tab>
          ))}
        </TabList>
        <TabIndicator style={customStyles} />
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
