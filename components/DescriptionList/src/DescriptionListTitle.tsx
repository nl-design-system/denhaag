import React from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListTitleProps = HTMLAttributes<HTMLElement>;

export const DescriptionListTitle: React.FC<DescriptionListTitleProps> = ({
  children,
  className,
  ...props
}: DescriptionListTitleProps) => {
  return (
    <dt {...props} className={clsx('denhaag-description-list__title', className)}>
      {children}
    </dt>
  );
};
