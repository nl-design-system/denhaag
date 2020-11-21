import React, { ElementType, ReactElement } from 'react'
import MaterialMenuItem from '@material-ui/core/MenuItem'

export interface MenuItemProps {
  /**
   * Menu item contents.
   */
  children: ReactElement

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object

  /**
   * The component used for the root node.
   */
  component?: ElementType

  /**
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense?: boolean

  /**
   * If true, the left and right padding is removed.
   */
  disableGutters?: boolean

  /**
   * classes prop applied to the ListItem element.
   */
  ListItemClasses?: object

  /**
   * Callback fired when the item is clicked.
   */
  onClick?: () => void
}

/**
 * Represents an item in a Menu component.
 * @param props The properties of a MenuItem component.
 * @constructor Constructs an instance of MenuItem.
 */
export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <MaterialMenuItem
      classes={props.classes}
      component={props.component ?? 'li'}
      dense={props.dense}
      disableGutters={props.disableGutters ?? false}
      ListItemClasses={props.ListItemClasses}
      onClick={props.onClick}
    >
      {props.children}
    </MaterialMenuItem>
  )
}

export default MenuItem
