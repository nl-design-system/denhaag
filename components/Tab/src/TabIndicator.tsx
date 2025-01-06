import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface TabIndicatorProps extends HTMLAttributes<HTMLDivElement> {}

export const TabIndicator: React.FC<TabIndicatorProps> = ({ children, ...props }) => {
  return (
    <div className={clsx('denhaag-tabs__tab-indicator')} {...props}>
      {children}
    </div>
  );
};
