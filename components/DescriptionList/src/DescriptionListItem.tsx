import React, { HTMLAttributes } from 'react';
import { DescriptionListTitle } from './DescriptionListTitle';
import { DescriptionListDetail } from './DescriptionListDetail';

export type DescriptionListItemProps = HTMLAttributes<HTMLElement> & {
  title: string;
  detail: string;
};

export const DescriptionListItem: React.FC<DescriptionListItemProps> = ({
  title,
  detail,
}: DescriptionListItemProps) => {
  return (
    <>
      <DescriptionListTitle>{title}</DescriptionListTitle>
      <DescriptionListDetail>{detail}</DescriptionListDetail>
    </>
  );
};
