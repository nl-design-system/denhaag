import React, { ReactNode } from 'react';
import LinkListBase, { LinkListBaseProps } from './LinkListBase';
import LinkListItem from './LinkListItem';
import { ArrowRightIcon } from '@gemeente-denhaag/icons';
import LinkListItemText from './LinkListItemText';
import Link from '@gemeente-denhaag/link';

type Items = {
  label: ReactNode;
  href: string;
  external?: boolean;
};

export type LinkListProps = LinkListBaseProps & {
  items: Items[];
};

export const LinkList = ({ items, ...props }: LinkListProps) => {
  return (
    <LinkListBase {...props}>
      {[...items]
        .sort((a, b) => {
          if (a.external === b.external) return 0;
          return a.external ? 1 : -1;
        })
        .map((item) => (
          <LinkListItem key={item.href}>
            <Link icon={<ArrowRightIcon />} iconAlign="start" href={item.href}>
              <LinkListItemText>{item.label}</LinkListItemText>
            </Link>
          </LinkListItem>
        ))}
    </LinkListBase>
  );
};

export default LinkList;
