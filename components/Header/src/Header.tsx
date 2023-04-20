import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderProps = HTMLAttributes<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classNames = clsx('denhaag-header', props.className);

  return (
    <header id="site-header" className={classNames}>
      {props.children}
    </header>
  );
};

export default Header;
