import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SidenavLinkLabelProps extends HTMLAttributes<HTMLSpanElement> {}

export const SidenavLinkLabel = ({ className, ...props }: SidenavLinkLabelProps) => {
  const classNames = clsx('denhaag-sidenav__link-label', className);
  return (
    <span {...props} className={classNames}>
      {props.children}
    </span>
  );
};

export default SidenavLinkLabel;
