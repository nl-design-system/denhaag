import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface TabsContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const TabsContainer: React.FC<TabsContainerProps> = ({ children, className }) => {
  const rootClassNames = clsx('denhaag-tabs', className);
  return <div className={rootClassNames}>{children}</div>;
};
