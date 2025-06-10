import React, { ReactNode } from 'react';
import { PageIndexNav, PageIndexNavProps } from './PageIndexNav';
import UnorderedList, { UnorderedListItem } from '@gemeente-denhaag/unorderedlist';
import Link from '@gemeente-denhaag/link';

type Item = {
  label: ReactNode;
  href: string;
};

export interface PageIndexProps extends PageIndexNavProps {
  heading: ReactNode;
  items: Item[];
}

export const PageIndex = ({ heading, items, ...props }: PageIndexProps) => {
  return (
    <PageIndexNav {...props}>
      {heading}
      <UnorderedList className="denhaag-page-index__list">
        {items.map((item) => (
          <UnorderedListItem key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </UnorderedListItem>
        ))}
      </UnorderedList>
    </PageIndexNav>
  );
};
