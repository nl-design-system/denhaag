import React, { ReactNode } from 'react';
import { PageIndexNav, PageIndexNavProps } from './PageIndexNav';
import { UnorderedList, UnorderedListItem } from '@gemeente-denhaag/unorderedlist';
import { Link } from '@gemeente-denhaag/link';
import clsx from 'clsx';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '@gemeente-denhaag/typography';

type Item = {
  label: ReactNode;
  href: string;
};

type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface PageIndexProps extends PageIndexNavProps {
  heading: string;
  headingAs: Headers;
  headingSize: Headers;
  items: Item[];
}

type HeadingProps = {
  as?: Headers;
  size?: Headers;
  children?: ReactNode;
};

// TODO: Temporary fix, should be replaced with the Candidate Heading when finished
const Heading = ({ as = 'h1', size = as, children }: HeadingProps) => {
  const classes = clsx({
    [`utrecht-heading-${size.replace('h', '')}`]: as !== size,
  });

  if (as === 'h1') return <Heading1 className={classes}>{children}</Heading1>;
  if (as === 'h2') return <Heading2 className={classes}>{children}</Heading2>;
  if (as === 'h3') return <Heading3 className={classes}>{children}</Heading3>;
  if (as === 'h4') return <Heading4 className={classes}>{children}</Heading4>;
  return <Heading5 className={classes}>{children}</Heading5>;
};

export const PageIndex = ({ heading, headingAs, headingSize, items, ...props }: PageIndexProps) => {
  return (
    <PageIndexNav {...props}>
      <Heading as={headingAs} size={headingSize}>
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
