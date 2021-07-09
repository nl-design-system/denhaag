import React from 'react';
import { Menu as MaterialMenu } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface MenuProps extends BaseProps {
  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: HTMLElement | null;

  /**
   * If true (Default) will focus the [role="menu"] if no focusable child is found.
   * Disabled children are not focusable.
   * If you set this prop to false focus will be placed on the parent modal container.
   * This has severe accessibility implications and should only be considered if you manage focus otherwise.
   */
  autoFocus?: boolean;

  /**
   * When opening the menu will not focus the active item but the [role="menu"] unless autoFocus is also set to false.
   * Not using the default means not following WAI-ARIA authoring practices.
   * Please be considerate about possible accessibility implications.
   */
  disableAutoFocusItem?: boolean;

  /**
   * Props applied to the MenuList element.
   */
  MenuListProps?: Record<string, unknown>;

  /**
   * Callback fired when the component requests to be closed.
   * @param event The event source of the callback.
   * @param reason Can be "escapeKeyDown", "backdropClick", "tabKeydown".
   */
  onClose?: (event: React.ChangeEvent<unknown>, reason: string) => void;

  /**
   * If true, the menu is visible.
   */
  open: boolean;

  /**
   * classes prop applied to the Popover element.
   */
  PopoverClasses?: Record<string, unknown>;

  /**
   * The length of the transition in ms, or 'auto'
   */
  transitionDuration?: 'auto' | number | { appear?: number; enter?: number; exit?: number };

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: Record<string, unknown>;

  /**
   * The variant to use.
   */
  variant?: 'menu' | 'selectedMenu';
}

/**
 * Menu displays a list of choices on temporary surfaces.
 * @param props The properties of a Menu component.
 * @constructor Constructs an instance of Menu.
 */
export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return <MaterialMenu {...props}>{props.children}</MaterialMenu>;
};

export default Menu;
