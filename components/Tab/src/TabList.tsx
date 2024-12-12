import React, { HTMLAttributes, forwardRef } from 'react';
import './styles/_tabs.scss';
import clsx from 'clsx';

export type TabListProps = HTMLAttributes<HTMLDivElement>;

/**
 * TabList make it easy to explore and switch between different views.
 * @param props The properties of a TabList component.
 * @constructor Constructs an instance of TabList.
 */
export const TabList = forwardRef<HTMLDivElement, TabListProps>(({ className, children, ...props }, ref) => {
  const rootClassNames = clsx('denhaag-tabs__list', className);

  return (
    <div {...props} role="tablist" ref={ref} className={rootClassNames}>
      {children}
    </div>
  );
});

TabList.displayName = 'TabList';

export default TabList;
