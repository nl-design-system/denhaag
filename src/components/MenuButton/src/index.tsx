import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './menubutton.css';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

export interface MenuButtonProps extends BaseProps {
  /**
   * Determines the url the menu button refers to
   * Only applicable to the normal variant
   */
  href?: string;

  /**
   * Determines the Onclick function the menu button referst to
   * Only applicable to the Expandable variant
   */
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Determines if the Menu Button is expandable
   */
  variant?: 'normal' | 'expandable';
}

export const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps) => {
  let component = null;
  if (props.variant === 'expandable') {
    component = (
      <button onClick={props.onclick} className="denhaag-menu-button">
        {props.children}
        <span className="denhaag-menu-button__chevron">
          <ChevronDownIcon aria-label="ChevronDownIcon" />
        </span>
      </button>
    );
  } else {
    component = (
      <a href={props.href} className="denhaag-menu-button">
        {props.children}
      </a>
    );
  }

  return component;
};

export default MenuButton;
