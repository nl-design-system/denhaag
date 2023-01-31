import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type BreadcrumbLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = (props: BreadcrumbLinkProps) => {
  const classNames = clsx('denhaag-breadcrumb__link', props.className);

  return (
    <a {...props} className={classNames}>
      {props.children}
    </a>
  );
};

export default BreadcrumbLink;
