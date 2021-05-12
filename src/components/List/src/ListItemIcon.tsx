import React from 'react';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import BaseProps from '@gemeente-denhaag/baseprops';
import { listitemicon_classes as classes } from './bem-mapping';
import './mui-override.module.css';
import { StylesProvider } from '@material-ui/core';

export type ListItemIconProps = BaseProps;

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (props: ListItemIconProps) => {
  return (
    <StylesProvider injectFirst>
      <MaterialListItemIcon {...props} classes={classes}>
        {props.children}
      </MaterialListItemIcon>
    </StylesProvider>
  );
};

export default ListItemIcon;
