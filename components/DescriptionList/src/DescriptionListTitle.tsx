import React from 'react';
import { HTMLAttributes } from 'react';

export type DescriptionListTitleProps = HTMLAttributes<HTMLElement>;

export const DescriptionListTitle: React.FC<DescriptionListTitleProps> = ({ children }: DescriptionListTitleProps) => {
  return <dt className="denhaag-description-list__title">{children}</dt>;
};
