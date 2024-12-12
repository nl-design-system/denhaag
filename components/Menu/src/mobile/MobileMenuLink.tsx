import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

export type Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => React.ReactNode;

export interface MobileMenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  large?: boolean;
  Link?: Link;
}

export const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({
  large,
  children,
  Link = ({ children, ...props }) => <a {...props}>{children}</a>,
  ...props
}) => {
  const classNames = clsx(
    'utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-link',
    large ? 'denhaag-mobile-menu-list-item-link--large' : '',
  );

  return (
    <Link {...props} className={classNames}>
      {children}
    </Link>
  );
};

export default MobileMenuLink;
