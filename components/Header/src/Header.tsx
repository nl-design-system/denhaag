import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export const Header = ({ children, className, ...props }: HeaderProps) => {
  const classNames = clsx('denhaag-header', className);

  return (
    <header {...props} id="site-header" className={classNames}>
      {children}
    </header>
  );
};

export default Header;
