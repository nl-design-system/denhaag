import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type TabTextProps = HTMLAttributes<HTMLSpanElement>;

export const TabText = ({ children, ...props }: TabTextProps) => {
  return (
    <span {...props} className={clsx('denhaag-tabs__tab-text')}>
      {children}
    </span>
  );
};
