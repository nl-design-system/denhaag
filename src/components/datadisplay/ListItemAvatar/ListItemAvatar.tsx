import React from "react";
import MaterialListItemAvatar from "@material-ui/core/ListItemAvatar";
import BaseProps from "../../BaseProps/BaseProps";

export interface ListItemAvatarProps extends BaseProps {
  /**
   * The content of the component.
   */
  children: React.ReactElement<any, any>;
}

/**
 * Primary UI component for user interaction
 */
export const ListItemAvatar: React.FC<ListItemAvatarProps> = (props: ListItemAvatarProps) => {
  return <MaterialListItemAvatar {...props}>{props.children}</MaterialListItemAvatar>;
};

export default ListItemAvatar;
