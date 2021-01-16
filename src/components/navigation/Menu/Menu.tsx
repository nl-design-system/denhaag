import React from 'react'
import MaterialMenu from '@material-ui/core/Menu'
import BaseProps from '@gemeente-denhaag/baseprops'

export interface MenuProps extends BaseProps {
  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: HTMLElement | null

  /**
   * If true (Default) will focus the [role="menu"] if no focusable child is found.
   * Disabled children are not focusable.
   * If you set this prop to false focus will be placed on the parent modal container.
   * This has severe accessibility implications and should only be considered if you manage focus otherwise.
   */
  autoFocus?: boolean

  /**
   * When opening the menu will not focus the active item but the [role="menu"] unless autoFocus is also set to false.
   * Not using the default means not following WAI-ARIA authoring practices.
   * Please be considerate about possible accessibility implications.
   */
  disableAutoFocusItem?: boolean

  /**
   * Props applied to the MenuList element.
   */
  MenuListProps?: object

  /**
   * Callback fired when the component requests to be closed.
   * @param event The event source of the callback.
   * @param reason Can be "escapeKeyDown", "backdropClick", "tabKeydown".
   */
  onClose?: (event: object, reason: string) => void

  /**
   * Callback fired before the Menu enters.
   */
  onEnter?: () => void

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering?: () => void

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered?: () => void

  /**
   * Callback fired before the Menu exits.
   */
  onExit?: () => void

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting?: () => void

  /**
   * Callback fired when the Menu has exited.
   */
  onExited?: () => void

  /**
   * If true, the menu is visible.
   */
  open: boolean

  /**
   * classes prop applied to the Popover element.
   */
  PopoverClasses?: object

  /**
   * The length of the transition in ms, or 'auto'
   */
  transitionDuration?:
  | 'auto'
  | number
  | { appear?: number, enter?: number, exit?: number }

  /**
   * The variant to use.
   */
  variant?: 'menu' | 'selectedMenu'
}

/**
 * Menu displays a list of choices on temporary surfaces.
 * @param props The properties of a Menu component.
 * @constructor Constructs an instance of Menu.
 */
export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return <MaterialMenu {...props}>{props.children}</MaterialMenu>
}

export default Menu
