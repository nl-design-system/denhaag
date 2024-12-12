import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type TabsContainerProps = HTMLAttributes<HTMLDivElement>;

export const TabsContainer: React.FC<TabsContainerProps> = ({ children, className, ...props }) => {
  const rootClassNames = clsx('denhaag-tabs', className);
  return (
    <div {...props} className={rootClassNames}>
      {children}
    </div>
  );
};
