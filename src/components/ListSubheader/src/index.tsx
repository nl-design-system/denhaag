import React from "react";
import MaterialListSubheader from "@material-ui/core/ListSubheader";
import BaseProps from "@gemeente-denhaag/baseprops";

export interface ListSubheaderProps extends BaseProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: "default" | "primary" | "inherit";

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters?: boolean;

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky?: boolean;

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const ListSubheader: React.FC<ListSubheaderProps> = (props: ListSubheaderProps) => {
  return <MaterialListSubheader {...props}>{props.children}</MaterialListSubheader>;
};

export default ListSubheader;
