import React from 'react';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListDetailProps = HTMLAttributes<HTMLElement>;

export const DescriptionListDetail: React.FC<DescriptionListDetailProps> = ({
  children,
  className,
  ...props
}: DescriptionListDetailProps) => {
  return (
    <dd {...props} className={clsx('denhaag-description-list__detail', className)}>
      {children}
    </dd>
  );
};
