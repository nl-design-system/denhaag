import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SideNavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}

export const SideNavigationLink = ({ current, ...props }: SideNavigationLinkProps) => {
  const className = clsx(
    'denhaag-side-navigation__link',
    current && 'denhaag-side-navigation__link--current',
    props.className,
  );

  return <a aria-current={current || props['aria-current'] ? 'page' : undefined} className={className} {...props} />;
};

export default SideNavigationLink;
