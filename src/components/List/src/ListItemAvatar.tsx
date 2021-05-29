import React from 'react';
import MaterialListItemAvatar from '@material-ui/core/ListItemAvatar';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface ListItemAvatarProps extends BaseProps {
  /**
   * The content of the component.
   */
  children: React.ReactElement;
}

/**
 * Primary UI component for user interaction
 */
export const ListItemAvatar: React.FC<ListItemAvatarProps> = (props: ListItemAvatarProps) => {
  return <MaterialListItemAvatar {...props}>{props.children}</MaterialListItemAvatar>;
};

export default ListItemAvatar;
