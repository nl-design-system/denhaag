import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface DescriptionListItemProps extends HTMLAttributes<HTMLDivElement> {}

export const DescriptionListItem = ({ className, children, ...props }: DescriptionListItemProps) => {
  const classNames = clsx('denhaag-description-list-item', className);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
