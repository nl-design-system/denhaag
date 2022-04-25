import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SidenavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}

export const SidenavLink: React.FC<SidenavLinkProps> = ({ current, ...props }: SidenavLinkProps) => {
  const className = clsx('denhaag-sidenav__link', current && 'denhaag-sidenav__link--current', props.className);

  return (
    <a {...props} className={className}>
      {props.children}
    </a>
  );
};

export default SidenavLink;
