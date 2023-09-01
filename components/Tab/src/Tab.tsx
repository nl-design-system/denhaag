import React, { ReactElement } from 'react';
import { Tab as MaterialTab } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import './styles/_tab.scss';
import clsx from 'clsx';

export interface TabProps extends Omit<BaseProps, 'classes'> {
  /**
   * If true, the tab will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the keyboard focus ripple will be disabled.
   */
  disableFocusRipple?: boolean;

  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple?: boolean;

  /**
   * The icon element.
   */
  icon?: ReactElement;

  /**
   * The label element.
   */
  label: React.ReactNode;

  /**
   * You can provide your own value.
   * Otherwise, we fallback to the child position index.
   */
  value?: number | string;

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped?: boolean;
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tab component.
 * @constructor Construct an instance of Tab.
 */
export const Tab: React.FC<TabProps> = (props: TabProps) => {
  const rootClassNames = clsx('denhaag-tabs__tab', props.className);
  return (
    <MaterialTab
      {...props}
      classes={{ selected: 'denhaag-tabs__tab--selected' }}
      className={rootClassNames}
      disableRipple
    />
  );
};

export default Tab;
