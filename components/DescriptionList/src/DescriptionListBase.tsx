import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListBaseProps = HTMLAttributes<HTMLDListElement>;

export const DescriptionListBase: React.FC<DescriptionListBaseProps> = ({
  children,
  ...props
}: DescriptionListBaseProps) => {
  return (
    <dl {...props} className={clsx('denhaag-description-list', props.className)}>
      {children}
    </dl>
  );
};
