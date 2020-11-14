import React, { ReactElement } from 'react'
import MaterialMenuList from '@material-ui/core/MenuList'

export interface MenuListProps {
  /**
   * If true, will focus the [role="menu"] container and move into tab order.
   */
  autoFocus?: boolean

  /**
   * If true, will focus the first menuitem if variant="menu" or selected item if variant="selectedMenu".
   */
  autoFocusItem?: boolean

  /**
   * MenuList contents, normally MenuItems.
   */
  children: ReactElement

  /**
   * If true, will allow focus on disabled items.
   */
  disabledItemsFocusable?: boolean

  /**
   * If true, the menu items will not wrap focus.
   */
  disableListWrap?: boolean

  /**
   * The variant to use.
   */
  variant?: 'menu' | 'selectedMenu'
}

/**
 * Represents a list of MenuItem components in a Menu component.
 * @param props The properties of a MenuList component.
 * @constructor Constructs an instance of MenuList.
 */
export const MenuList: React.FC<MenuListProps> = (props: MenuListProps) => {
  return (
    <MaterialMenuList
      autoFocus={props.autoFocus ?? false}
      autoFocusItem={props.autoFocusItem ?? false}
      disabledItemsFocusable={props.disabledItemsFocusable ?? false}
      disableListWrap={props.disableListWrap ?? false}
      variant={props.variant ?? 'selectedMenu'}
    >
      {props.children}
    </MaterialMenuList>
  )
}

export default MenuList
