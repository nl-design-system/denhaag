import React, { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';
import { LinkListBase, LinkListBaseProps } from './LinkListBase';
import { LinkListItem } from './LinkListItem';
import { ArrowRightIcon, ExternalLinkIcon } from '@gemeente-denhaag/icons';
import { Link as DHLink } from '@gemeente-denhaag/link';

export type Items = {
  label: ReactNode;
  href: string;
  external?: boolean;
};

export type LinkListProps = LinkListBaseProps & {
  items: Items[];
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
};

export const LinkList = ({ items, Link, ...props }: LinkListProps) => {
  return (
    <LinkListBase {...props}>
      {[...items]
        .sort((a, b) => {
          if (a.external === b.external) return 0;
          return a.external ? 1 : -1;
        })
        .map((item) => (
          <LinkListItem key={item.href}>
            <DHLink
              icon={item.external ? <ExternalLinkIcon /> : <ArrowRightIcon />}
              iconAlign="start"
              href={item.href}
              Link={Link}
            >
              {item.label}
            </DHLink>
          </LinkListItem>
        ))}
    </LinkListBase>
  );
};

export default LinkList;
