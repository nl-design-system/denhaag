import React, { AnchorHTMLAttributes } from 'react';
import { Link, LinkProps } from '@nl-design-system-candidate/link-react';
import '@nl-design-system-candidate/link-css/link.css';

export interface BasicLinkProps extends Omit<LinkProps, 'href'> {
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
}

export const BasicLink = ({ href, ...props }: BasicLinkProps) => {
  return <Link href={href} {...props} />;
};
