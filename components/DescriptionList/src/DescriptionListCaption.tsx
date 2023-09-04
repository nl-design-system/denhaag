import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListCaptionProps = HTMLAttributes<HTMLHeadingElement>;

export const DescriptionListCaption: React.FC<DescriptionListCaptionProps> = ({
  children,
  className,
  ...props
}: DescriptionListCaptionProps) => {
  return (
    <h3 id="h3" {...props} className={clsx('denhaag-description-list__caption', className)}>
      {children}
    </h3>
  );
};
