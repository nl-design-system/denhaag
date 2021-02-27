import React from "react";
import MaterialList from "@material-ui/core/List";
import BaseProps from "@gemeente-denhaag/baseprops";

export interface ListProps extends BaseProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense?: boolean;

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding?: boolean;

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader?: React.ReactElement<any, any>;
}

/**
 * Primary UI component for user interaction
 */
export const List: React.FC<ListProps> = (props: ListProps) => {
  return <MaterialList {...props}>{props.children}</MaterialList>;
};

export default List;
export * from "@gemeente-denhaag/listitem";
export * from "@gemeente-denhaag/listitemavatar";
export * from "@gemeente-denhaag/listitemicon";
export * from "@gemeente-denhaag/listitemsecondaryaction";
export * from "@gemeente-denhaag/listitemtext";
export * from "@gemeente-denhaag/listsubheader";
