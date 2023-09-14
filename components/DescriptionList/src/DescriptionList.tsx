import React, { Fragment, HTMLAttributes } from 'react';
import { DescriptionListCaption } from './DescriptionListCaption';
import { DescriptionListTitle } from './DescriptionListTitle';
import { DescriptionListDetail } from './DescriptionListDetail';
import { DescriptionListBase } from './DescriptionListBase';

import './index.scss';

type DescriptionListItem = {
  title: React.ReactNode;
  detail: React.ReactNode;
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
        {items.map((item, index) => (
          <Fragment key={index}>
            <DescriptionListTitle>{item.title}</DescriptionListTitle>
            <DescriptionListDetail>{item.detail}</DescriptionListDetail>
          </Fragment>
        ))}
      </DescriptionListBase>
    </>
  );
};
