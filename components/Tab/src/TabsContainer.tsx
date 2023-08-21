import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface TabsContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const TabsContainer: React.FC<TabsContainerProps> = ({ children, className, ...props }) => {
  const rootClassNames = clsx('denhaag-tabs', className);
  return (
    <div {...props} className={rootClassNames}>
      {children}
    </div>
  );
};
