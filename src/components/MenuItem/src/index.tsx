import React, { ElementType } from "react";
import MaterialMenuItem from "@material-ui/core/MenuItem";
import BaseProps from "@gemeente-denhaag/baseprops/src";

export interface MenuItemProps extends BaseProps {
  /**
   * The component used for the root node.
   */
  component?: ElementType;

  /**
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense?: boolean;

  /**
   * If true, the left and right padding is removed.
   */
  disableGutters?: boolean;

  /**
   * classes prop applied to the ListItem element.
   */
  ListItemClasses?: Record<string, unknown>;

  /**
   * Callback fired when the item is clicked.
   */
  onClick?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * The value assigned to the MenuItem.
   */
  value?: string | ReadonlyArray<string> | number;
}

/**
 * Represents an item in a Menu component.
 * @param props The properties of a MenuItem component.
 * @constructor Constructs an instance of MenuItem.
 */
export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return <MaterialMenuItem {...props}>{props.children}</MaterialMenuItem>;
};

export default MenuItem;
