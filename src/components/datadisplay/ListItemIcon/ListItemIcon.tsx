import React from "react";
import MaterialListItemIcon from "@material-ui/core/ListItemIcon";
import BaseProps from "../../BaseProps/BaseProps";

export type ListItemIconProps = BaseProps;

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (props: ListItemIconProps) => {
  return <MaterialListItemIcon {...props}>{props.children}</MaterialListItemIcon>;
};

export default ListItemIcon;
