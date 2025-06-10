import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListContainerProps = HTMLAttributes<HTMLDivElement>;

export const DescriptionListContainer = ({ children, className, ...props }: DescriptionListContainerProps) => {
  return (
    <div {...props} className={clsx('denhaag-description-list-container', className)}>
      {children}
    </div>
  );
};
