import React, { useState } from 'react';
import HeaderLogo from '@gemeente-denhaag/header-logo';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import Link from '@gemeente-denhaag/link';
import { MenuButton, MenuButtonExpandable, MobileMenu } from '@gemeente-denhaag/menu';
import './index.scss';
import Header from './Header';
import HeaderContent from './HeaderContent';
import HeaderLogoContainer from './HeaderLogoContainer';
import HeaderActions from './HeaderActions';
import HeaderMobileActions from './HeaderMobileActions';
import HeaderAction from './HeaderAction';
import Breadcrumb from '@gemeente-denhaag/breadcrumb';
import { Sheet, SheetOverlay, SheetContainer } from '@gemeente-denhaag/sheet';
import IconButton from '@gemeente-denhaag/iconbutton';
import { CloseIcon, ArrowRightIcon, LogOutIcon } from '@gemeente-denhaag/icons';
import { LinkGroup, LinkGroupList, LinkGroupListItem } from '@gemeente-denhaag/link-group';
import { LanguageSwitcherLogic, LanguageSwitcherLogicProps } from '@gemeente-denhaag/language-switcher';
import { Heading4 } from '@gemeente-denhaag/typography';
import './index.scss';
import { Button } from '@gemeente-denhaag/button';

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
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleWelcomeMenuToggle = (event: React.MouseEvent) => {
    event.preventDefault();

    setLanguageSwitcherActive(false);
    setMobileMenuActive(false);

    setWelcomeMenuActive((current) => !current);
  };

  const handleLanguageSwitcherToggle = (event: React.MouseEvent) => {
    event.preventDefault();

    setWelcomeMenuActive(false);
    setMobileMenuActive(false);

    setLanguageSwitcherActive((current) => !current);
  };

  const handleMobileMenuToggle = (event: React.MouseEvent) => {
    event.preventDefault();

    setLanguageSwitcherActive(false);
    setWelcomeMenuActive(false);

    setMobileMenuActive((current) => !current);
  };

  const handleCloseSheet = () => {
    setWelcomeMenuActive(false);
    setLanguageSwitcherActive(false);
    setMobileMenuActive(false);
  };

  return (
    <Header>
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
          <HeaderActions>
            <HeaderAction className="denhaag-header__actions-action-language-switcher">
              <MenuButtonExpandable active={languageSwitcherActive} onClick={handleLanguageSwitcherToggle}>
                NL
              </MenuButtonExpandable>
            </HeaderAction>
            <HeaderAction className="denhaag-header__actions-action-user-menu">
              <MenuButtonExpandable active={welcomeMenuActive} onClick={handleWelcomeMenuToggle}>
                {props.userprofileMenu.label}
              </MenuButtonExpandable>
            </HeaderAction>
          </HeaderActions>
          <HeaderMobileActions>
            <Button onClick={handleMobileMenuToggle}>Menu</Button>
          </HeaderMobileActions>
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
      {mobileMenuActive && (
        <React.Fragment>
          <Sheet>
            <ResponsiveContent>
              <IconButton className="denhaag-sheet__close-button" onClick={handleMobileMenuToggle}>
                <CloseIcon />
              </IconButton>
              <SheetContainer>
                <MenuButton>Home</MenuButton>
                <MobileMenu></MobileMenu>
                <div className="denhaag-button-group">
                  <Button icon={<LogOutIcon />}>Uitloggen</Button>
                </div>
                <LanguageSwitcherLogic {...props.languageSwitcherMenu}></LanguageSwitcherLogic>
              </SheetContainer>
            </ResponsiveContent>
          </Sheet>
          <SheetOverlay onClick={handleCloseSheet} />
        </React.Fragment>
      )}
    </Header>
  );
};

export default HeaderLogic;
