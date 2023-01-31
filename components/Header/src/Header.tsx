import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import HeaderLogo from '@gemeente-denhaag/header-logo';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import Link from '@gemeente-denhaag/link';
import { MenuButtonExpandable } from '@gemeente-denhaag/menu';
import clsx from 'clsx';
import './index.scss';
import HeaderContent from './HeaderContent';
import HeaderLogoContainer from './HeaderLogoContainer';

export interface HeaderProps extends Omit<BaseProps, 'tabIndex' | 'classNames'> {
  /**
   * The navigation component
   */
  navigation?: React.ReactElement;

  /**
   * The header actions component
   */
  actions?: React.ReactElement;

  /**
   * The header actions component
   */
  breadcrumbs?: React.ReactElement;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classNames = clsx('denhaag-header', props.className);

  return (
    <header id="site-header" className={classNames}>
      <ResponsiveContent>
        <HeaderContent>
          <HeaderLogoContainer>
            <Link
              href="https://www.denhaag.nl"
              className="denhaag-logo denhaag-header__link"
              aria-label="Gemeente Den Haag"
            >
              <HeaderLogo />
            </Link>
          </HeaderLogoContainer>
          {props.navigation && <div className="denhaag-header__navigation">{props.navigation}</div>}
          {/* {props.actions && <div className="denhaag-header__actions">{props.actions}</div>} */}
          <div className="denhaag-header__actions">
            <div className="denhaag-language-switcher">
              <MenuButtonExpandable>NL</MenuButtonExpandable>
            </div>
            <div className="denhaag-user-menu">
              <MenuButtonExpandable>Welkom Anne Klap</MenuButtonExpandable>
            </div>
          </div>
        </HeaderContent>
      </ResponsiveContent>
      {props.breadcrumb}
      {props.children}
    </header>
  );
};

export default Header;
