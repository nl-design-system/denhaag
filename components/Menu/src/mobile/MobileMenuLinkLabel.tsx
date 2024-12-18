import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type MobileMenuLinkLabelProps = HTMLAttributes<HTMLDivElement>;

export const MobileMenuLinkLabel = ({ className, children, ...props }: MobileMenuLinkLabelProps) => {
  const classNames = clsx('denhaag-mobile-menu-list-item-link-label', className);

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};

export default MobileMenuLinkLabel;
