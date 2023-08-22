import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListBaseProps = HTMLAttributes<HTMLDivElement>;

export const DescriptionListBase: React.FC<DescriptionListBaseProps> = ({
  children,
  ...props
}: DescriptionListBaseProps) => {
  return <dl className={clsx('denhaag-description-list', props.className)}>{children}</dl>;
};
