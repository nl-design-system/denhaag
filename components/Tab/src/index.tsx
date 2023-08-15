import React, { Ref, RefObject, createRef, useEffect, useState } from 'react';
import { TabsContainer } from './TabsContainer';
import { TabIndicator } from './TabIndicator';
import { HTMLAttributes } from 'react';
import { TabList } from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';
import { TabText } from './TabText';

export * from './Tab';
export * from './TabPanel';
export * from './TabList';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Callback fired when the value changes.
   * @param event The event source of the callback
   * @param value Defaults to the index of the child (number)
   */
  onTabChange?: (event: React.ChangeEvent<unknown>, value: number) => void;

  tabData: Array<{ label: string; panelContent: React.ReactNode }>;

  selectedTab?: number;
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tabs component.
 * @constructor Constructs an instance of Tabs.
 */
export const Tabs: React.FC<TabsProps> = ({ tabData, ...props }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [focussedTab, setFocussedTab] = useState<number | undefined>();

  const [tabs] = useState(
    tabData.map((tab) => {
      const tabRef = createRef<HTMLDivElement>();
      return { tab, tabRef };
    }),
  );

  const handleTabChange = (event: any, index: number) => {
    event.preventDefault();
    setSelectedTab(index);
    setFocussedTab(index);
  };

  const tabListRef = createRef<HTMLDivElement>();

  useEffect(() => {
    tabListRef.current?.addEventListener('keydown', handleKeyDown);
    return () => {
      tabListRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [tabListRef]);

  useEffect(() => {
    if (focussedTab !== undefined) {
      tabs[focussedTab].tabRef?.current?.focus();
    }
  }, [focussedTab]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setFocussedTab((prevFocussedTab) => {
        //TODO: nadenken over logica
      });
    } else if (event.key === 'ArrowLeft') {
      setFocussedTab((prevFocussedTab) => {
        //TODO: nadenken over logica
      });
    } else {
      return;
    }

    event.preventDefault();
  };

  const handleTabFocus = (index: number) => {
    setFocussedTab(index);
  };

  const customStyles = {
    '--_denhaag-tabs-tab-indicator-inset-inline-start': `${selectedTab * 176}px`,
    '--_denhaag-tabs-tab-indicator-size': '176px',
  };

  return (
    <>
      <TabsContainer>
        <TabList ref={tabListRef}>
          {tabs.map(({ tab, tabRef }, index) => (
            <Tab
              role="tab"
              tabIndex={selectedTab === index ? 0 : -1}
              aria-selected={selectedTab === index ? true : false}
              key={`tab-${index}`}
              ref={tabRef}
              value={index}
              selected={selectedTab === index}
              onClick={(event) => handleTabChange(event, index)}
              onFocus={() => handleTabFocus(index)}
            >
              <TabText>{tab.label}</TabText>
            </Tab>
          ))}
        </TabList>
        <TabIndicator style={customStyles as any} />
      </TabsContainer>
      {tabData.map((tab, index) => (
        <TabPanel
          key={`tab-panel-${index}`}
          value={index}
          tabIndex={0}
          selected={selectedTab === index}
          hidden={selectedTab !== index}
        >
          {tab.panelContent}
        </TabPanel>
      ))}
    </>
  );
};

export default Tabs;
