import React, { useEffect, useRef, useState } from 'react';
import HeaderLogo from '@gemeente-denhaag/header-logo';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import Link from '@gemeente-denhaag/link';
import { MenuButtonExpandable, MobileMenu } from '@gemeente-denhaag/menu';
import './index.scss';
import Header from './Header';
import HeaderContentContainer from './HeaderContentContainer';
import HeaderContent from './HeaderContent';
import HeaderLogoContainer from './HeaderLogoContainer';
import HeaderActions from './HeaderActions';
import HeaderMobileActions from './HeaderMobileActions';
import HeaderAction from './HeaderAction';
import { Breadcrumb, BreadcrumbProps } from '@gemeente-denhaag/breadcrumb';
import { Sheet, SheetOverlay, SheetContainer, SheetDialog, useEscapeKey, useScreenSize } from '@gemeente-denhaag/sheet';
import IconButton from '@gemeente-denhaag/iconbutton';
import { CloseIcon, ArrowRightIcon, LogOutIcon } from '@gemeente-denhaag/icons';
import { LinkGroup, LinkGroupList, LinkGroupListItem } from '@gemeente-denhaag/link-group';
import { LanguageSwitcherLogic, LanguageSwitcherLogicProps } from '@gemeente-denhaag/language-switcher';
import { Heading4 } from '@gemeente-denhaag/typography';
import { Button } from '@gemeente-denhaag/button';
import './index.scss';

export interface HeaderLogicProps {
  breadcrumbs?: BreadcrumbProps;
  userprofileMenu?: MenuProps;
  languageSwitcherMenu?: LanguageSwitcherProps;
  mobileMenu?: MobileMenuProps;
  logoutButton?: LogoutButtonProps;
  mobileBreakpoint?: number;
}

interface LogoutButtonProps {
  label: string;
  onLogoutClick: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

interface LanguageSwitcherProps {
  currentLanguageLabel: string;
  languageSwitcherProps: LanguageSwitcherLogicProps;
}

interface MobileMenuProps {
  openLabel: string;
  closeLabel: string;
  navigation?: Array<NavigationGroupProps>;
}

interface MenuProps {
  label: string;
  navigationGroups: Array<NavigationGroupProps>;
}

interface NavigationGroupProps {
  label: string;
  url?: string;
  navigation?: Array<NavigationGroupProps>;
}

const NavigationGroup: React.FC<NavigationGroupProps> = (props: NavigationGroupProps) => {
  const navigationLinks = props.navigation?.map((navigationLink, key) => {
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
      <Heading4>{props.label}</Heading4>
      <LinkGroupList>{navigationLinks}</LinkGroupList>
    </LinkGroup>
  );
};

export const HeaderLogic: React.FC<HeaderLogicProps> = ({
  breadcrumbs,
  userprofileMenu,
  languageSwitcherMenu,
  mobileMenu,
  logoutButton,
  mobileBreakpoint = 1024,
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

  const renderMobileMenu = mobileMenu || languageSwitcherMenu || logoutButton;

  return (
    <Header>
      <HeaderContentContainer>
        <HeaderContent className="denhaag-responsive-content">
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
              <IconButton className="denhaag-sheet__close-button" onClick={handleLanguageSwitcherToggle}>
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
              <IconButton className="denhaag-sheet__close-button" onClick={handleWelcomeMenuToggle}>
                <CloseIcon />
              </IconButton>
              <SheetContainer>
                {userprofileMenu.navigationGroups.map((group, key) => {
                  return <NavigationGroup {...group} key={key} />;
                })}
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
                  <Link
                    href="https://www.denhaag.nl"
                    className="denhaag-logo denhaag-header__link"
                    aria-label="Gemeente Den Haag"
                  >
                    <HeaderLogo />
                  </Link>
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
