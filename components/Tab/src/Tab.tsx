import React, { HTMLAttributes, forwardRef } from 'react';
import './styles/_tab.scss';
import clsx from 'clsx';

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
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
    <div {...props} ref={ref} role="tab" aria-selected={selected} className={rootClassNames}>
      {props.children}
    </div>
  );
});

Tab.displayName = 'Tab';

export default Tab;
