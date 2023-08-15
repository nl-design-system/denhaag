import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type DescriptionListCaptionProps = HTMLAttributes<HTMLHeadingElement>;

export const DescriptionListCaption: React.FC<DescriptionListCaptionProps> = (props: DescriptionListCaptionProps) => {
  const className = clsx('denhaag-description-list__caption', props.className);

  return (
    <h3 id="h3" {...props} className={className}>
      {props.children}
    </h3>
  );
};
