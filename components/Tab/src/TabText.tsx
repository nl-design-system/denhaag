import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface TabTextProps extends HTMLAttributes<HTMLDivElement> {}

export const TabText: React.FC<TabTextProps> = ({ children }) => {
  return <div className={clsx('denhaag-tabs__tab-text')}>{children}</div>;
};
