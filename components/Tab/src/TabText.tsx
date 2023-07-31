import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface TabTextProps extends HTMLAttributes<HTMLSpanElement> {}

export const TabText: React.FC<TabTextProps> = ({ children }) => {
  return <span className={clsx('denhaag-tabs__tab-text')}>{children}</span>;
};
