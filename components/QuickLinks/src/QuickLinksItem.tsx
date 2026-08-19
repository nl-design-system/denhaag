import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { BasicLink } from '@gemeente-denhaag/link';

export interface QuickLinksItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const QuickLinksItem = ({ children, Link = BasicLink, ...props }: QuickLinksItemProps) => (
  <Link className="denhaag-quick-links__item" {...props}>
    {children}
  </Link>
);

export default QuickLinksItem;
