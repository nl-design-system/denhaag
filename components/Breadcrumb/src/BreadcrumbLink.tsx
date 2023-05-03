import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;

export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Link?: Link;
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
