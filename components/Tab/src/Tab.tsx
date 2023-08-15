import React, { HTMLAttributes, ReactElement, forwardRef } from 'react';
import './styles/_tab.scss';
import clsx from 'clsx';

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
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
   * You can provide your own value.
   * Otherwise, we fallback to the child position index.
   */
  value?: number | string;

  selected?: boolean;
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tab component.
 * @constructor Construct an instance of Tab.
 */
export const Tab = forwardRef<HTMLDivElement, TabProps>(({ selected, className, ...props }, ref) => {
  const rootClassNames = clsx('denhaag-tabs__tab', selected ? 'denhaag-tabs__tab--selected' : '', className);
  return (
    <div {...props} ref={ref} role="tab" className={rootClassNames}>
      {props.children}
    </div>
  );
});

export default Tab;
