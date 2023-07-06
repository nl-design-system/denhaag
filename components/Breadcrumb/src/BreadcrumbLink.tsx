import React, { AnchorHTMLAttributes } from 'react';
import { CustomLink } from '@gemeente-denhaag/link';
import clsx from 'clsx';
import './index.scss';

export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Link?: CustomLink;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  className,
  children,
  Link = ({ children, ...props }) => <a {...props}>{children}</a>,
  ...props
}: BreadcrumbLinkProps) => {
  const classNames = clsx('denhaag-breadcrumb__link', className);

  return (
    <Link {...props} className={classNames}>
      {children}
    </Link>
  );
};

export default BreadcrumbLink;
