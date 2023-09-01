import React from 'react';
import { Tabs as MaterialTabs } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import './styles/_tabs.scss';
import './styles/_mui-override.scss';
import clsx from 'clsx';

export interface TabsProps extends Omit<BaseProps, 'classes'> {
  /**
   * Callback fired when the component mounts.
   */
  action?: () => void;

  /**
   * The label for the Tabs as a string.
   */
  ariaLabel?: string;

  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  ariaLabelledBy?: string;

  /**
   * If true, the tabs will be centered. This property is intended for large views.
   */
  centered?: boolean;

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ReactNode;

  /**
   * Determines the color of the indicator.
   */
  indicatorColor?: 'primary' | 'secondary';

  /**
   * Callback fired when the value changes.
   * @param event The event source of the callback
   * @param value Defaults to the index of the child (number)
   */
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void;

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent?: React.ElementType;

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   * - auto will only present them when not all the items are visible.
   * - desktop will only present them on medium and larger viewports.
   * - on will always present them. - off will never present them.
   */
  scrollButtons?: 'auto' | 'desktop' | 'off' | 'on';

  /**
   * If true the selected tab changes on focus.
   */
  selectionFollowsFocus?: boolean;

  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps?: Record<string, unknown>;

  /**
   * Props applied to the TabScrollButton element.
   */
  TabScrollButtonProps?: Record<string, unknown>;

  /**
   * Determines the color of the Tab.
   */
  textColor?: 'inherit' | 'primary' | 'secondary';

  /**
   * The value of the currently selected Tab.
   * If you don't want any selected Tab, you can set this property to false.
   * Although any value can be used, we recommend choosing either
   * numbers or strings to identify your tabs.
   */
  value: number | string | false;

  /**
   * Determines additional display behavior of the tabs:
   * - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
   *  - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
   *  - standard will render the default state.
   */
  variant?: 'fullWidth' | 'scrollable' | 'standard';
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tabs component.
 * @constructor Constructs an instance of Tabs.
 */
export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const rootClassNames = clsx(props.className);
  return (
    <MaterialTabs
      classes={{
        root: 'denhaag-tabs',
        flexContainer: 'denhaag-tabs__container',
        indicator: 'denhaag-tabs__tab-indicator',
      }}
      {...props}
      className={rootClassNames}
    >
      {props.children}
    </MaterialTabs>
  );
};

export default Tabs;
