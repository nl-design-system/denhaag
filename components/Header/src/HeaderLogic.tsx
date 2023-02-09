import React, { useState } from 'react';
import HeaderLogo from '@gemeente-denhaag/header-logo';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import Link from '@gemeente-denhaag/link';
import { MenuButtonExpandable } from '@gemeente-denhaag/menu';
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
import { CloseIcon, ArrowRightIcon, LogOutIcon, ChevronDownIcon, ArrowLeftIcon } from '@gemeente-denhaag/icons';
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
              <SheetContainer className="denhaag-mobile-menu denhaag-mobile-menu--scrolled">
                <ul className="denhaag-mobile-menu-list">
                  <li className="denhaag-mobile-menu-list-item">
                    <a
                      className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-button"
                      href="#test"
                    >
                      Home
                    </a>
                  </li>
                  <li className="denhaag-mobile-menu-list-item denhaag-mobile-menu-list-item--expandable">
                    <button className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-button">
                      <p className="denhaag-mobile-menu-list-item-button-text">Onderwerpen</p>
                      <ChevronDownIcon />
                    </button>
                    <ul className="denhaag-mobile-menu-list-item-expanded-list denhaag-mobile-menu-list-item-expanded-list--open">
                      <li className="denhaag-mobile-menu-list-item-expanded-list-item">
                        <button className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-subitem-button">
                          Omgeving
                        </button>
                        <div className="denhaag-mobile-menu-list-submenu denhaag-mobile-menu-list-submenu--open">
                          <a
                            href="#example-link"
                            tabIndex={0}
                            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-mobile-menu-list-submenu__back-button"
                          >
                            <span className="denhaag-link__icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="denhaag-icon"
                                focusable="false"
                                aria-hidden="true"
                                shapeRendering="auto"
                              >
                                <path
                                  d="M11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11L19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L7.41421 13L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                            <span className="denhaag-link__label">Terug</span>
                          </a>
                          <span className="denhaag-mobile-menu-list-submenu-title">Omgeving</span>
                          <ul className="denhaag-mobile-menu-list-submenu-list denhaag-mobile-menu-list-submenu-list--open">
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#parkeren"
                              >
                                <span>Parkeren</span>
                                <span className="denhaag-mobile-menu-list-submenu-list-item-link__icon">
                                  <ArrowRightIcon />
                                </span>
                              </a>
                            </li>
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#Afval"
                              >
                                <span>Afval</span>
                                <span className="denhaag-mobile-menu-list-submenu-list-item-link__icon">
                                  <ArrowRightIcon />
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="denhaag-mobile-menu-list-item-expanded-list-item">
                        <button className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-subitem-button">
                          Wonen
                        </button>
                        <div className="denhaag-mobile-menu-list-submenu">
                          <Button
                            variant="secondary-action"
                            iconAlign="start"
                            icon={<ArrowLeftIcon />}
                            className="denhaag-mobile-menu-list-submenu__back-button"
                          >
                            Terug
                          </Button>
                          <span className="denhaag-mobile-menu-list-submenu-title">Omgeving</span>
                          <ul className="denhaag-mobile-menu-list-submenu-list denhaag-mobile-menu-list-submenu-list--open">
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#verhuizen"
                              >
                                Verhuizen en migratie
                              </a>
                            </li>
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#belastingen"
                              >
                                Belastingen
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="denhaag-mobile-menu-list-item">
                    <a
                      className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-button"
                      href="#test"
                    >
                      Ondernemen
                    </a>
                  </li>
                  <li className="denhaag-mobile-menu-list-item denhaag-mobile-menu-list-item--expandable">
                    <button className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-button">
                      <p className="denhaag-mobile-menu-list-item-button-text">De gemeente</p>
                      <ChevronDownIcon />
                    </button>
                    <ul className="denhaag-mobile-menu-list-item-expanded-list denhaag-mobile-menu-list-item-expanded-list--open">
                      <li className="denhaag-mobile-menu-list-item-expanded-list-item">
                        <button className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-subitem-button">
                          Over Den Haag
                        </button>
                        <div className="denhaag-mobile-menu-list-submenu">
                          <Button
                            variant="secondary-action"
                            iconAlign="start"
                            icon={<ArrowLeftIcon />}
                            className="denhaag-mobile-menu-list-submenu__back-button"
                          >
                            Terug
                          </Button>
                          <span className="denhaag-mobile-menu-list-submenu-title">Over Den Haag</span>
                          <ul className="denhaag-mobile-menu-list-submenu-list denhaag-mobile-menu-list-submenu-list--open">
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#parkeren"
                              >
                                Denk mee
                              </a>
                            </li>
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#Afval"
                              >
                                Den Haag in cijfers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="denhaag-mobile-menu-list-item-expanded-list-item">
                        <button className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-subitem-button">
                          Bestuur en organisatie
                        </button>
                        <div className="denhaag-mobile-menu-list-submenu">
                          <Button
                            variant="secondary-action"
                            iconAlign="start"
                            icon={<ArrowLeftIcon />}
                            className="denhaag-mobile-menu-list-submenu__back-button"
                          >
                            Terug
                          </Button>
                          <span className="denhaag-mobile-menu-list-submenu-title">Bestuur en organisatie</span>
                          <ul className="denhaag-mobile-menu-list-submenu-list denhaag-mobile-menu-list-submenu-list--open">
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#verhuizen"
                              >
                                College van burgemeester en wethouders
                              </a>
                            </li>
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#belastingen"
                              >
                                Gemeenteraad
                              </a>
                            </li>
                            <li className="denhaag-mobile-menu-list-submenu-list-item">
                              <a
                                className="utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-submenu-list-item-link"
                                href="#belastingen"
                              >
                                Gemeentelijke organisatie
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="denhaag-mobile-menu-actions">
                  <div className="denhaag-button-group">
                    <Button icon={<LogOutIcon />}>Uitloggen</Button>
                  </div>
                  <LanguageSwitcherLogic {...props.languageSwitcherMenu}></LanguageSwitcherLogic>
                </div>
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
