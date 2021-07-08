import React from 'react';
import { ListItemIcon as MaterialListItemIcon } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import { listitemicon_classes as classes } from './bem-mapping';

export type ListItemIconProps = BaseProps;

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (props: ListItemIconProps) => {
  return (
    <MaterialListItemIcon {...props} classes={classes}>
      {props.children}
    </MaterialListItemIcon>
  );
};

export default ListItemIcon;
