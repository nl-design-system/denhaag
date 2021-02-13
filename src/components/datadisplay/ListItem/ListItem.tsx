import React from "react";
import MaterialListItem from "@material-ui/core/ListItem";
import BaseProps from "@gemeente-denhaag/baseprops";
import { ContainerProps } from "@gemeente-denhaag/container/Container";

export interface ListItemProps extends BaseProps {
  /**
   * Defines the `align-items` style property.
   */
  alignItems?: "flex-start" | "center";

  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus?: boolean;

  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button?: any;

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   */
  ContainerComponent?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;

  /**
   * Props applied to the container component if used.
   */
  ContainerProps?: Partial<ContainerProps>;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense?: boolean;

  /**
   * If `true`, the list item will be disabled.
   */
  disabled?: boolean;

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters?: boolean;

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider?: boolean;

  /**
   * Use to apply selected styling.
   */
  selected?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  return <MaterialListItem {...props}>{props.children}</MaterialListItem>;
};

export default ListItem;
