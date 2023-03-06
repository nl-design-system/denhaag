import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MobileMenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  large?: boolean;
}

export const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({ large, children, ...props }) => {
  const classNames = clsx(
    'utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-link',
    large ? 'denhaag-mobile-menu-list-item-link--large' : '',
  );

  return (
    <a {...props} className={classNames}>
      {children}
    </a>
  );
};

export default MobileMenuLink;
