import React from 'react';
import { HTMLAttributes } from 'react';

export type DescriptionListDetailProps = HTMLAttributes<HTMLElement>;

export const DescriptionListDetail: React.FC<DescriptionListDetailProps> = ({
  children,
}: DescriptionListDetailProps) => {
  return <dd className="denhaag-description-list__detail">{children}</dd>;
};
