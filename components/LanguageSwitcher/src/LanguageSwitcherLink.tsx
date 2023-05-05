import React, { AnchorHTMLAttributes } from 'react';
import './index.scss';

export type Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;

export interface LanguageSwitcherLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Link?: Link;
}

export const LanguageSwitcherLink: React.FC<LanguageSwitcherLinkProps> = ({
  className,
  children,
  Link = ({ children, ...props }) => <a {...props}>{children}</a>,
  ...props
}: LanguageSwitcherLinkProps) => {
  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default LanguageSwitcherLink;
