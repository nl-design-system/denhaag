import React, { useState } from 'react';
import HeaderLogo from '@gemeente-denhaag/header-logo';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import Link from '@gemeente-denhaag/link';
import { MenuButtonExpandable } from '@gemeente-denhaag/menu';
import './index.scss';
import HeaderNew from './HeaderNew';
import HeaderContent from './HeaderContent';
import HeaderLogoContainer from './HeaderLogoContainer';
import Breadcrumb from '@gemeente-denhaag/breadcrumb';
import { Sheet, SheetOverlay, SheetContainer } from '@gemeente-denhaag/sheet';
import IconButton from '@gemeente-denhaag/iconbutton';
import { CloseIcon, ArrowRightIcon } from '@gemeente-denhaag/icons';
import { LinkGroup, LinkGroupList, LinkGroupListItem } from '@gemeente-denhaag/link-group';
import { LanguageSwitcherLogic, LanguageSwitcherLogicProps } from '@gemeente-denhaag/language-switcher';
import { Heading4 } from '@gemeente-denhaag/typography';

import './index.scss';

export interface HeaderLogicProps {
  breadcrumbs: Array<LinkItemProps>;
  userprofileMenu: MenuProps;
  languageSwitcherMenu: LanguageSwitcherLogicProps;
}

interface LinkItemProps {
  label: string;
  url: string;
}

interface MenuProps {
  label: string;
  navigationGroups: Array<NavigationGroupProps>;
}

interface NavigationGroupProps {
  title: string;
  navigation: Array<LinkItemProps>;
}

const NavigationGroup: React.FC<NavigationGroupProps> = (props: NavigationGroupProps) => {
  const navigationLinks = props.navigation.map((navigationLink, key) => {
    return (
      <LinkGroupListItem key={key}>
        <Link icon={<ArrowRightIcon />} iconAlign="start" href={navigationLink.url}>
          {navigationLink.label}
        </Link>
      </LinkGroupListItem>
    );
  });

  return (
    <LinkGroup>
      <Heading4>{props.title}</Heading4>
      <LinkGroupList>{navigationLinks}</LinkGroupList>
    </LinkGroup>
  );
};

export const HeaderLogic: React.FC<HeaderLogicProps> = (props: HeaderLogicProps) => {
  const [welcomeMenuActive, setWelcomeMenuActive] = useState(false);
  const [languageSwitcherActive, setLanguageSwitcherActive] = useState(false);

  const handleWelcomeMenuToggle = (event: React.MouseEvent) => {
    event.preventDefault();

    if (languageSwitcherActive) {
      setLanguageSwitcherActive((current) => !current);
    }

    setWelcomeMenuActive((current) => !current);
  };

  const handleLanguageSwitcherToggle = (event: React.MouseEvent) => {
    event.preventDefault();

    if (welcomeMenuActive) {
      setWelcomeMenuActive((current) => !current);
    }

    setLanguageSwitcherActive((current) => !current);
  };

  const handleCloseSheet = () => {
    setWelcomeMenuActive(false);
    setLanguageSwitcherActive(false);
  };

  return (
    <HeaderNew>
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
          <div className="denhaag-header__actions">
            <div className="denhaag-language-switcher">
              <MenuButtonExpandable active={languageSwitcherActive} onClick={handleLanguageSwitcherToggle}>
                NL
              </MenuButtonExpandable>
            </div>
            <div className="denhaag-user-menu">
              <MenuButtonExpandable active={welcomeMenuActive} onClick={handleWelcomeMenuToggle}>
                {props.userprofileMenu.label}
              </MenuButtonExpandable>
            </div>
          </div>
        </HeaderContent>
      </ResponsiveContent>
      <Breadcrumb navigationPath={props.breadcrumbs} />
      {languageSwitcherActive && (
        <React.Fragment>
          <Sheet>
            <ResponsiveContent>
              <IconButton className="denhaag-sheet__close-button" onClick={handleLanguageSwitcherToggle}>
                <CloseIcon />
              </IconButton>
              <SheetContainer>
                <LanguageSwitcherLogic {...props.languageSwitcherMenu}></LanguageSwitcherLogic>
              </SheetContainer>
            </ResponsiveContent>
          </Sheet>
          <SheetOverlay onClick={handleCloseSheet} />
        </React.Fragment>
      )}
      {welcomeMenuActive && (
        <React.Fragment>
          <Sheet>
            <ResponsiveContent>
              <IconButton className="denhaag-sheet__close-button" onClick={handleWelcomeMenuToggle}>
                <CloseIcon />
              </IconButton>
              <SheetContainer>
                {props.userprofileMenu.navigationGroups.map((group, key) => {
                  return <NavigationGroup {...group} key={key} />;
                })}
              </SheetContainer>
            </ResponsiveContent>
          </Sheet>
          <SheetOverlay onClick={handleCloseSheet} />
        </React.Fragment>
      )}
    </HeaderNew>
  );
};

export default HeaderLogic;
