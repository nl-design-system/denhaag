import React, { ReactNode } from 'react';
import { PageIndexNav, PageIndexNavProps } from './PageIndexNav';
import { UnorderedList, UnorderedListItem } from '@gemeente-denhaag/unorderedlist';
import { Link } from '@gemeente-denhaag/link';
import { Heading, HeadingAppearance, HeadingLevel } from '@gemeente-denhaag/heading';

type Item = {
  label: ReactNode;
  href: string;
};

export interface PageIndexProps extends PageIndexNavProps {
  heading: string;
  headingLevel: HeadingLevel;
  headingAppearance: HeadingAppearance;
  items: Item[];
}

export const PageIndex = ({ heading, headingLevel, headingAppearance, items, ...props }: PageIndexProps) => {
  return (
    <PageIndexNav {...props}>
      <Heading level={headingLevel} appearance={headingAppearance}>
        {heading}
      </Heading>
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
