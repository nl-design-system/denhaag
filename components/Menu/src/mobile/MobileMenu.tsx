import React, { HTMLAttributes, useState } from 'react';
import { SheetContainer } from '@gemeente-denhaag/sheet';
import { ArrowRightIcon, ChevronDownIcon, ArrowLeftIcon, LogOutIcon } from '@gemeente-denhaag/icons';
import { MobileMenuList } from './MobileMenuList';
import { MobileMenuListItem } from './MobileMenuListItem';
import { MobileSubMenu } from './MobileSubMenu';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenuLink } from './MobileMenuLink';
import { LanguageSwitcherLogic, LanguageSwitcherLogicProps } from '@gemeente-denhaag/language-switcher';
import { Button } from '@gemeente-denhaag/button';

import useToggleState from './use-togglestate';
import clsx from 'clsx';

interface NavigationGroupProps {
  label: string;
  url?: string;
  navigation?: Array<NavigationGroupProps>;
}

interface LogoutButtonProps {
  label: string;
  onLogoutClick: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

export interface MobileMenuProps extends HTMLAttributes<HTMLElement> {
  navigation?: Array<NavigationGroupProps>;
  languageSwitcherMenu?: LanguageSwitcherLogicProps;
  logoutButton?: LogoutButtonProps;
}

interface ExpandedListItemProps extends NavigationGroupProps {
  scrollMenu: () => void;
  tabIndex?: number;
}

const ExpandedListItem = (props: ExpandedListItemProps) => {
  const toggle = useToggleState(props.scrollMenu);

  return (
    <MobileMenuListItem>
      <MobileMenuButton {...toggle.buttonProps} tabIndex={props.tabIndex}>
        {props.label}
      </MobileMenuButton>
      <MobileSubMenu {...toggle.expandableAreaProps}>
        <div>
          <button
            onClick={toggle.toggleState}
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-mobile-menu-list-submenu__back-button"
          >
            <span className="denhaag-link__icon">
              <ArrowLeftIcon />
            </span>
            <span className="denhaag-link__label">Terug</span>
          </button>
          <span className="denhaag-mobile-menu-list-submenu-title">{props.label}</span>
          <MobileMenuList>
            {props.navigation?.map((l3Nav, key) => {
              return (
                <MobileMenuListItem key={key}>
                  <MobileMenuLink href={l3Nav.url}>
                    <span>{l3Nav.label}</span>
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

const ExpandedList = (props: ExpandedListItemProps) => {
  const toggle = useToggleState();

  return (
    <MobileMenuListItem active={toggle.open}>
      <MobileMenuButton {...toggle.buttonProps} tabIndex={props.tabIndex} large>
        <p className="denhaag-mobile-menu-list-item-button-text">{props.label}</p>
        <ChevronDownIcon />
      </MobileMenuButton>
      <MobileMenuList {...toggle.expandableAreaProps} expandable>
        {props.navigation?.map((l2Nav, key) => {
          if (l2Nav.url) {
            return (
              <MobileMenuListItem key={key}>
                <MobileMenuLink href={l2Nav.url} tabIndex={props.tabIndex}>
                  <span>{l2Nav.label}</span>
                  <span className="denhaag-mobile-menu-list-submenu-list-item-link__icon">
                    <ArrowRightIcon />
                  </span>
                </MobileMenuLink>
              </MobileMenuListItem>
            );
          } else {
            return <ExpandedListItem {...l2Nav} tabIndex={props.tabIndex} scrollMenu={props.scrollMenu} key={key} />;
          }
        })}
      </MobileMenuList>
    </MobileMenuListItem>
  );
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navigation,
  languageSwitcherMenu,
  logoutButton,
}: MobileMenuProps) => {
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
            if (l1Nav.url) {
              return (
                <MobileMenuListItem key={key}>
                  <MobileMenuLink href={l1Nav.url} large tabIndex={menuScrolled ? -1 : undefined}>
                    {l1Nav.label}
                  </MobileMenuLink>
                </MobileMenuListItem>
              );
            } else {
              return (
                <ExpandedList {...l1Nav} tabIndex={menuScrolled ? -1 : undefined} scrollMenu={scrollMenu} key={key} />
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
