import React, { HTMLAttributes, useState } from 'react';
import { BadgeCounter } from '@gemeente-denhaag/badge-counter';
import { SheetContainer } from '@gemeente-denhaag/sheet';
import { ArrowRightIcon, ChevronDownIcon, ArrowLeftIcon, LogOutIcon } from '@gemeente-denhaag/icons';
import { MobileMenuList } from './MobileMenuList';
import { MobileMenuListItem } from './MobileMenuListItem';
import { MobileSubMenu } from './MobileSubMenu';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenuLink, Link } from './MobileMenuLink';
import { LanguageSwitcherLogic, LanguageSwitcherLogicProps } from '@gemeente-denhaag/language-switcher';
import { Button } from '@gemeente-denhaag/button';

import useToggleState from './use-togglestate';
import clsx from 'clsx';
import MobileMenuLinkLabel from './MobileMenuLinkLabel';

interface NavigationGroupProps {
  label?: string;
  href?: string;
  navigation?: Array<NavigationGroupProps>;
  defaultExpanded?: boolean;
  badgeCounter?: number;
}

interface LogoutButtonProps {
  label: string;
  onLogoutClick: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

export interface MobileMenuProps extends HTMLAttributes<HTMLElement> {
  navigation?: Array<NavigationGroupProps>;
  languageSwitcherMenu?: LanguageSwitcherLogicProps;
  logoutButton?: LogoutButtonProps;
  Link?: Link;
}

interface ExpandedListItemProps extends NavigationGroupProps {
  Link?: Link;
  scrollMenu: () => void;
  tabIndex?: number;
}

const ExpandedListItem = ({ label, navigation, Link, scrollMenu, tabIndex }: ExpandedListItemProps) => {
  const toggle = useToggleState(false, scrollMenu);

  return (
    <MobileMenuListItem>
      <MobileMenuButton {...toggle.buttonProps} tabIndex={tabIndex}>
        {label}
      </MobileMenuButton>
      <MobileSubMenu {...toggle.expandableAreaProps}>
        <div>
          <button
            onClick={toggle.toggleState}
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-mobile-menu-list-submenu__back-button"
          >
            <ArrowLeftIcon className="denhaag-link__icon" />
            <span className="denhaag-link__label">Terug</span>
          </button>
          <span className="denhaag-mobile-menu-list-submenu-title">{label}</span>
          <MobileMenuList>
            {navigation?.map((l3Nav, key) => {
              return (
                <MobileMenuListItem key={key}>
                  <MobileMenuLink Link={Link} href={l3Nav.href}>
                    <MobileMenuLinkLabel>
                      <span>{l3Nav.label}</span>
                      {l3Nav.badgeCounter && <BadgeCounter>{l3Nav.badgeCounter}</BadgeCounter>}
                    </MobileMenuLinkLabel>
                    <span className="denhaag-mobile-menu-list-submenu-list-item-link__icon">
                      <ArrowRightIcon />
                    </span>
                  </MobileMenuLink>
                </MobileMenuListItem>
              );
            })}
          </MobileMenuList>
        </div>
      </MobileSubMenu>
    </MobileMenuListItem>
  );
};

const ExpandedList = ({
  label,
  navigation,
  defaultExpanded = false,
  Link,
  scrollMenu,
  tabIndex,
}: ExpandedListItemProps) => {
  const toggle = useToggleState(defaultExpanded);

  return (
    <MobileMenuListItem active={toggle.open}>
      {label && (
        <MobileMenuButton {...toggle.buttonProps} tabIndex={tabIndex} large>
          <p className="denhaag-mobile-menu-list-item-button-text">{label}</p>
          <ChevronDownIcon />
        </MobileMenuButton>
      )}
      <MobileMenuList {...toggle.expandableAreaProps} expandable>
        {navigation?.map((l2Nav, key) => {
          if (l2Nav.href) {
            return (
              <MobileMenuListItem key={key}>
                <MobileMenuLink Link={Link} href={l2Nav.href} tabIndex={tabIndex}>
                  <MobileMenuLinkLabel>
                    <span>{l2Nav.label}</span>
                    {l2Nav.badgeCounter && <BadgeCounter>{l2Nav.badgeCounter}</BadgeCounter>}
                  </MobileMenuLinkLabel>
                  <span className="denhaag-mobile-menu-list-submenu-list-item-link__icon">
                    <ArrowRightIcon />
                  </span>
                </MobileMenuLink>
              </MobileMenuListItem>
            );
          } else {
            return <ExpandedListItem {...l2Nav} Link={Link} tabIndex={tabIndex} scrollMenu={scrollMenu} key={key} />;
          }
        })}
      </MobileMenuList>
    </MobileMenuListItem>
  );
};

export const MobileMenu = ({ navigation, languageSwitcherMenu, logoutButton, Link }: MobileMenuProps) => {
  const [menuScrolled, setMenuScrolled] = useState(false);

  const classNames = clsx('denhaag-mobile-menu', menuScrolled ? 'denhaag-mobile-menu--scrolled' : '');

  const scrollMenu = () => {
    setMenuScrolled((menuScrolled) => !menuScrolled);
  };

  return (
    <SheetContainer className={classNames}>
      {navigation && (
        <MobileMenuList>
          {navigation.map((l1Nav, key) => {
            if (l1Nav.href) {
              return (
                <MobileMenuListItem key={key}>
                  <MobileMenuLink Link={Link} href={l1Nav.href} large tabIndex={menuScrolled ? -1 : undefined}>
                    {l1Nav.label}
                  </MobileMenuLink>
                </MobileMenuListItem>
              );
            } else {
              return (
                <ExpandedList
                  {...l1Nav}
                  Link={Link}
                  tabIndex={menuScrolled ? -1 : undefined}
                  scrollMenu={scrollMenu}
                  key={key}
                />
              );
            }
          })}
        </MobileMenuList>
      )}
      <div className="denhaag-mobile-menu-actions">
        {logoutButton && (
          <div className="denhaag-button-group">
            <Button tabIndex={menuScrolled ? -1 : undefined} icon={<LogOutIcon />} onClick={logoutButton.onLogoutClick}>
              {logoutButton.label}
            </Button>
          </div>
        )}
        {languageSwitcherMenu && <LanguageSwitcherLogic {...languageSwitcherMenu} mobileMenuScrolled={menuScrolled} />}
      </div>
    </SheetContainer>
  );
};

export default MobileMenu;
