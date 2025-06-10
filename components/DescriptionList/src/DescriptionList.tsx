import React, { HTMLAttributes } from 'react';
import { DescriptionListCaption } from './DescriptionListCaption';
import { DescriptionListTitle } from './DescriptionListTitle';
import { DescriptionListDetail } from './DescriptionListDetail';
import { DescriptionListBase } from './DescriptionListBase';
import { DescriptionListItem } from './DescriptionListItem';
import { DescriptionListContainer } from './DescriptionListContainer';
import './index.scss';

type DescriptionListElement = {
  title: React.ReactNode;
  detail: React.ReactNode;
  action?: React.ReactNode;
};

export type DescriptionListProps = HTMLAttributes<HTMLDListElement> & {
  caption?: string;
  items: DescriptionListElement[];
};

export const DescriptionList = ({ caption, items, ...props }: DescriptionListProps) => {
  return (
    <DescriptionListContainer>
      {caption && <DescriptionListCaption>{caption}</DescriptionListCaption>}
      <DescriptionListBase {...props}>
        {items.map((item, index) => (
          <DescriptionListItem key={index}>
            <DescriptionListTitle>{item.title}</DescriptionListTitle>
            <DescriptionListDetail>{item.detail}</DescriptionListDetail>
            {item.action && <DescriptionListDetail>{item.action}</DescriptionListDetail>}
          </DescriptionListItem>
        ))}
      </DescriptionListBase>
    </DescriptionListContainer>
  );
};
