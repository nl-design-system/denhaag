import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface TabsContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const TabsContainer: React.FC<TabsContainerProps> = ({ children }) => {
  return <div className={clsx('denhaag-tabs__container')}>{children}</div>;
};
