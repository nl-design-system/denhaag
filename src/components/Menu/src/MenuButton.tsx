import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './menu-button.css';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

/**
 * The properties of the normal variant of the Menu Button
 */
export interface MenuButtonProps extends Omit<BaseProps, 'classes' | 'tabIndex'> {
  /**
   * Determines the url the menu button refers to
   * Only applicable to the normal variant
   */
  href?: string;
}

/**
 * The properties of the expandable variant of the Menu Button
 */
export interface MenuButtonExpandableProps extends Omit<BaseProps, 'classes' | 'tabIndex'> {
  /**
   * Determines the Onclick function the menu button referst to
   * Only applicable to the Expandable variant
   */
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps) => {
  return (
    <a id={props.id} href={props.href} className="denhaag-menu-button">
      {props.children}
    </a>
  );
};

export const MenuButtonExpandable: React.FC<MenuButtonProps> = (props: MenuButtonExpandableProps) => {
  return (
    <button id={props.id} onClick={props.onclick} className="denhaag-menu-button">
      {props.children}
      <span className="denhaag-menu-button__chevron">
        <ChevronDownIcon aria-label="ChevronDownIcon" />
      </span>
    </button>
  );
};

export default MenuButton;
