import React, { HTMLAttributes } from 'react';
import { DescriptionListCaption } from './DescriptionListCaption';
import clsx from 'clsx';

import './index.scss';

export type DescriptionListProps = HTMLAttributes<HTMLDivElement> & {
  caption?: string;
};

export const DescriptionList: React.FC<DescriptionListProps> = ({ caption, ...props }: DescriptionListProps) => {
  const className = clsx('denhaag-description-list', props.className);

  return (
    <>
      {caption && <DescriptionListCaption>{caption}</DescriptionListCaption>}
      <dl className={className}>{props.children}</dl>
    </>
  );
};
