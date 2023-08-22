import React, { HTMLAttributes } from 'react';
import { DescriptionListCaption } from './DescriptionListCaption';
import { DescriptionListTitle } from './DescriptionListTitle';
import { DescriptionListDetail } from './DescriptionListDetail';
import { DescriptionListBase } from './DescriptionListBase';

import './index.scss';

type DescriptionListItem = {
  title: string;
  detail: string;
};

export type DescriptionListProps = HTMLAttributes<HTMLDivElement> & {
  caption?: string;
  items: DescriptionListItem[];
};

export const DescriptionList: React.FC<DescriptionListProps> = ({ caption, items }: DescriptionListProps) => {
  return (
    <>
      {caption && <DescriptionListCaption>{caption}</DescriptionListCaption>}
      <DescriptionListBase>
        {items.map((item) => (
          <>
            <DescriptionListTitle>{item.title}</DescriptionListTitle>
            <DescriptionListDetail>{item.detail}</DescriptionListDetail>
          </>
        ))}
      </DescriptionListBase>
    </>
  );
};
