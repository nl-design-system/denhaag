import React from 'react';
import MaterialListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { BaseChildrenProps } from '@gemeente-denhaag/baseprops';

import { listitemsecondaryaction_classes as classes } from './bem-mapping';
import './mui-override.module.css';
import { StylesProvider } from '@material-ui/core';

export type ListItemSecondaryActionProps = BaseChildrenProps;

/**
 * Primary UI component for user interaction
 */
export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props: ListItemSecondaryActionProps,
) => {
  return (
    <StylesProvider injectFirst>
      <MaterialListItemSecondaryAction {...props} classes={classes}>{props.children}</MaterialListItemSecondaryAction>
    </StylesProvider>
  );
};

export default ListItemSecondaryAction;
