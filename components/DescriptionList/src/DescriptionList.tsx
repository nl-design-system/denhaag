import React, { HTMLAttributes } from 'react';
import { DescriptionListCaption } from './DescriptionListCaption';
import { DescriptionListTitle } from './DescriptionListTitle';
import { DescriptionListDetail } from './DescriptionListDetail';
import { DescriptionListBase } from './DescriptionListBase';

import './index.scss';
import { DescriptionListItem } from './DescriptionListItem';

type DescriptionListElement = {
  title: React.ReactNode;
  detail: React.ReactNode;
  action?: React.ReactNode;
};

export type DescriptionListProps = HTMLAttributes<HTMLDivElement> & {
  caption?: string;
  items: DescriptionListElement[];
};

export const DescriptionList: React.FC<DescriptionListProps> = ({ caption, items }: DescriptionListProps) => {
  return (
    <>
      {caption && <DescriptionListCaption>{caption}</DescriptionListCaption>}
      <DescriptionListBase>
        {items.map((item, index) => (
          <DescriptionListItem key={index}>
            <DescriptionListTitle>{item.title}</DescriptionListTitle>
            <DescriptionListDetail>{item.detail}</DescriptionListDetail>
            {item.action && <DescriptionListDetail>{item.action}</DescriptionListDetail>}
          </DescriptionListItem>
        ))}
      </DescriptionListBase>
    </>
  );
};
