import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { BasicLink } from '@gemeente-denhaag/link';
import clsx from 'clsx';
import './index.scss';

export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  className,
  children,
  Link = BasicLink,
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
