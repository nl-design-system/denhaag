import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import HeaderLogo from '@gemeente-denhaag/header-logo';
import clsx from 'clsx';
import './index.scss';

export interface HeaderProps extends Omit<BaseProps, 'tabIndex' | 'classNamees' | 'children'> {
  /**
   * The navigation component
   */
  navigation?: React.ReactElement;

  /**
   * The header actions component
   */
  actions?: React.ReactElement;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classNames = clsx('denhaag-header', props.className);

  return (
    <header id="site-header" className={classNames}>
      <div className="denhaag-header__container">
        <div className="denhaag-header__logo">
          <a className="denhaag-logo denhaag-header__link" href="https://www.denhaag.nl" aria-label="Gemeente Den Haag">
            <HeaderLogo />
          </a>
        </div>
        {props.navigation && <div className="denhaag-header__navigation">{props.navigation}</div>}
        {props.actions && <div className="denhaag-header__actions">{props.actions}</div>}
      </div>
    </header>
  );
};

export default Header;
