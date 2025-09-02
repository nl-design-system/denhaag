import React, { AnchorHTMLAttributes, ComponentType, useEffect, useRef, useState } from 'react';
import { HeaderLogo } from '@gemeente-denhaag/header-logo';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Link, LinkProps } from '@gemeente-denhaag/link';
import { MenuButtonExpandable, MobileMenu, MobileMenuProps } from '@gemeente-denhaag/menu';
import './index.scss';
import { Header } from './Header';
import { HeaderContentContainer } from './HeaderContentContainer';
import { HeaderContent } from './HeaderContent';
import { HeaderLogoContainer } from './HeaderLogoContainer';
import { HeaderActions } from './HeaderActions';
import { HeaderMobileActions } from './HeaderMobileActions';
import { HeaderAction } from './HeaderAction';
import { Breadcrumb, BreadcrumbProps } from '@gemeente-denhaag/breadcrumb';
import { Sheet, SheetOverlay, SheetContainer, SheetDialog, useEscapeKey, useScreenSize } from '@gemeente-denhaag/sheet';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { CloseIcon, LogOutIcon } from '@gemeente-denhaag/icons';
import { LanguageSwitcherLogic, LanguageSwitcherLogicProps } from '@gemeente-denhaag/language-switcher';
import { Heading } from '@gemeente-denhaag/heading';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Button } from '@gemeente-denhaag/button';
import './index.scss';
import clsx from 'clsx';
import { LinkList } from '@gemeente-denhaag/link-list';

export interface HeaderLogicProps {
  breadcrumbs?: BreadcrumbProps;
  userprofileMenu?: MenuProps;
  languageSwitcherMenu?: LanguageSwitcherProps;
  mobileMenu?: HeaderMobileMenuProps;
  logoutButton?: LogoutButtonProps;
  mobileBreakpoint?: number;
  logo?: LinkProps;
}

interface LogoutButtonProps {
  label: string;
  onLogoutClick: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

interface LanguageSwitcherProps {
  currentLanguageLabel: string;
  languageSwitcherProps: LanguageSwitcherLogicProps;
}

interface HeaderMobileMenuProps extends MobileMenuProps {
  openLabel: string;
  closeLabel: string;
}

interface MenuProps {
  label: React.ReactNode;
  authorisedLoginLabel?: React.ReactNode;
  navigationGroups: Array<NavigationGroupProps>;
  CustomLink?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

interface NavigationGroupProps {
  label?: string;
  href?: string;
  navigation?: Array<NavigationGroupProps>;
}

export const HeaderLogic = ({
  breadcrumbs,
  userprofileMenu,
  languageSwitcherMenu,
  mobileMenu,
  logoutButton,
  mobileBreakpoint = 1024,
  logo = { href: 'https://www.denhaag.nl', 'aria-label': 'Gemeente Den Haag', children: <HeaderLogo /> },
}: HeaderLogicProps) => {
  const menuConstants = {
    WELCOME: 'WELCOME',
    LANGUAGE: 'LANGUAGE',
  };

  const [welcomeMenuActive, setWelcomeMenuActive] = useState(false);
  const [languageSwitcherActive, setLanguageSwitcherActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [mobileMenuActivatedBefore, setMobileMenuActivatedBefore] = useState(false);
  const [lastDesktopMenuActive, setLastDesktopMenuActive] = useState(menuConstants.WELCOME);

  const mobileMenuDialogRef = useRef<HTMLDialogElement>(null);

  const handleWelcomeMenuToggle = () => {
    setLanguageSwitcherActive(false);
    setMobileMenuActive(false);

    setWelcomeMenuActive((current) => !current);
    setLastDesktopMenuActive(menuConstants.WELCOME);
  };

  const handleLanguageSwitcherToggle = () => {
    setWelcomeMenuActive(false);
    setMobileMenuActive(false);

    setLanguageSwitcherActive((current) => !current);
    setLastDesktopMenuActive(menuConstants.LANGUAGE);
  };

  const handleMobileMenuToggle = () => {
    setLanguageSwitcherActive(false);
    setWelcomeMenuActive(false);

    setMobileMenuActive((current) => !current);
    setMobileMenuActivatedBefore(true);
  };

  const handleCloseSheet = () => {
    setWelcomeMenuActive(false);
    setLanguageSwitcherActive(false);
    setMobileMenuActive(false);
  };

  useEscapeKey(handleCloseSheet);

  const [windowWidth] = useScreenSize();
  useEffect(() => {
    if (mobileMenuActive && windowWidth >= mobileBreakpoint) {
      setMobileMenuActive(false);
      if (lastDesktopMenuActive === menuConstants.LANGUAGE) {
        setLanguageSwitcherActive(true);
      } else {
        setWelcomeMenuActive(true);
      }
    } else if ((welcomeMenuActive || languageSwitcherActive) && windowWidth < mobileBreakpoint) {
      setWelcomeMenuActive(false);
      setLanguageSwitcherActive(false);
      setMobileMenuActive(true);
    }
  }, [windowWidth]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    mobileMenuDialogRef.current?.showModal();
    if (mobileMenuActive) {
      closeButtonRef.current?.focus();
    } else if (mobileMenuActivatedBefore) {
      menuButtonRef.current?.focus();
    }
  }, [mobileMenuActive]);

  useEffect(() => {
    const menuOpen = welcomeMenuActive || languageSwitcherActive || mobileMenuActive;
    if (menuOpen) {
      handleCloseSheet();
    }
  }, [breadcrumbs, languageSwitcherMenu]);

  const renderMobileMenu = mobileMenu || languageSwitcherMenu || logoutButton;

  const CustomLink = userprofileMenu?.CustomLink;
  const NavigationGroup = ({ label, navigation }: NavigationGroupProps) => {
    if (!navigation) return null;

    return (
      <>
        <Heading level={4}>{label}</Heading>
        <LinkList
          items={navigation.map((navigationLink) => {
            return { label: navigationLink.label, href: navigationLink.href! };
          })}
          Link={CustomLink}
        />
      </>
    );
  };

  const { className: logoClassName, ...logoProps } = logo;

  return (
    <Header>
      <HeaderContentContainer>
        <HeaderContent className="denhaag-responsive-content">
          <HeaderLogoContainer>
            <Link className={clsx('denhaag-logo denhaag-header__link', logoClassName)} {...logoProps} />
          </HeaderLogoContainer>
          <HeaderActions>
            {languageSwitcherMenu && (
              <HeaderAction className="denhaag-header__actions-action-language-switcher">
                <MenuButtonExpandable active={languageSwitcherActive} onClick={handleLanguageSwitcherToggle}>
                  {languageSwitcherMenu.currentLanguageLabel}
                </MenuButtonExpandable>
              </HeaderAction>
            )}
            {userprofileMenu && (
              <HeaderAction className="denhaag-header__actions-action-user-menu">
                <MenuButtonExpandable active={welcomeMenuActive} onClick={handleWelcomeMenuToggle}>
                  {userprofileMenu.label}
                </MenuButtonExpandable>
              </HeaderAction>
            )}
          </HeaderActions>
          {renderMobileMenu && (
            <HeaderMobileActions>
              <Button
                className="denhaag-button denhaag-button--primary-action"
                onClick={handleMobileMenuToggle}
                ref={menuButtonRef}
              >
                {mobileMenu?.openLabel}
              </Button>
            </HeaderMobileActions>
          )}
        </HeaderContent>
      </HeaderContentContainer>
      {breadcrumbs && <Breadcrumb {...breadcrumbs} />}
      {languageSwitcherMenu && languageSwitcherActive && (
        <>
          <Sheet>
            <ResponsiveContent>
              <IconButton
                aria-label="close"
                className="denhaag-sheet__close-button"
                onClick={handleLanguageSwitcherToggle}
              >
                <CloseIcon />
              </IconButton>
              <SheetContainer>
                <LanguageSwitcherLogic {...languageSwitcherMenu.languageSwitcherProps}></LanguageSwitcherLogic>
              </SheetContainer>
            </ResponsiveContent>
          </Sheet>
          <SheetOverlay onClick={handleCloseSheet} />
        </>
      )}
      {userprofileMenu && welcomeMenuActive && (
        <>
          <Sheet>
            <ResponsiveContent>
              <IconButton aria-label="close" className="denhaag-sheet__close-button" onClick={handleWelcomeMenuToggle}>
                <CloseIcon />
              </IconButton>
              <SheetContainer className="denhaag-header-sheet-container">
                {userprofileMenu.navigationGroups.map((group, key) => {
                  return <NavigationGroup {...group} key={key} />;
                })}
                {userprofileMenu.authorisedLoginLabel && (
                  <Paragraph className="denhaag-sheet-title">{userprofileMenu.authorisedLoginLabel}</Paragraph>
                )}
                {logoutButton && (
                  <Button icon={<LogOutIcon />} onClick={logoutButton.onLogoutClick}>
                    {logoutButton.label}
                  </Button>
                )}
              </SheetContainer>
            </ResponsiveContent>
          </Sheet>
          <SheetOverlay onClick={handleCloseSheet} />
        </>
      )}
      {renderMobileMenu && mobileMenuActive && (
        <>
          <SheetDialog ref={mobileMenuDialogRef} onClose={handleMobileMenuToggle}>
            <ResponsiveContent>
              <HeaderContent>
                <HeaderLogoContainer>
                  <Link className={clsx('denhaag-logo denhaag-header__link', logoClassName)} {...logoProps} />
                </HeaderLogoContainer>
                <HeaderMobileActions>
                  <Button
                    className="denhaag-button denhaag-button--secondary-action"
                    onClick={handleMobileMenuToggle}
                    ref={closeButtonRef}
                  >
                    {mobileMenu?.closeLabel}
                  </Button>
                </HeaderMobileActions>
              </HeaderContent>
            </ResponsiveContent>
            <ResponsiveContent>
              <MobileMenu
                navigation={mobileMenu?.navigation}
                languageSwitcherMenu={languageSwitcherMenu?.languageSwitcherProps}
                logoutButton={logoutButton}
                Link={mobileMenu?.Link}
              />
            </ResponsiveContent>
          </SheetDialog>
          <SheetOverlay onClick={handleCloseSheet} />
        </>
      )}
    </Header>
  );
};

export default HeaderLogic;
