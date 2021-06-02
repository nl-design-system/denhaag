import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import BaseProps from '@gemeente-denhaag/baseprops';
import { listitem_classes as classes } from './bem-mapping';
import { ListItemIcon } from './ListItemIcon';
import { ListItemSecondaryAction, ListItemText } from '.';
import { ChevronRightIcon } from '@gemeente-denhaag/icons';
import IconButton from '@gemeente-denhaag/iconbutton';


export interface ListItemProps extends BaseProps {
  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus?: boolean;

  /**
   * A listitem can be used to navigate, in which case it has a different styling.
   * Use to specify which type of action this item is.
   */
  actionType?: 'nav' | 'action';

  /**
   * The callback fired when clicked
   */
  onClick?: (event: React.MouseEvent) => void;

  /**
   * The icon shown on the left side
   */
  leftIcon?: React.ReactNode;

  /**
   * The icon shown on the right side.
   * If actionType is 'action' it is clickable and will be focused.
   */
  rightIcon?: React.ReactNode;

  /**
   * The primary text shown in the listitem
   */
  primaryText: string;

  /**
   * The secondary text shown under the primaryText in the listitem.
   */
  secondaryText?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const muiProps = {
    autoFocus: props.autoFocus,
    actiontype: props.actionType,
  };

  const children = [];

  if (props.leftIcon) {
    children.push(<ListItemIcon key={0}>{props.leftIcon}</ListItemIcon>);
  }
  if (props.actionType === 'nav') {
    children.push(
      <ListItemSecondaryAction key={1}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <IconButton color="inherit" edge="end" tabIndex={-1} disableRipple disableFocusRipple>
          <ChevronRightIcon />
        </IconButton>
      </ListItemSecondaryAction>,
    );
  } else if (props.actionType === 'action') {
    children.push(
      <ListItemSecondaryAction key={2}>
        <IconButton
          color="inherit"
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          /* @ts-ignore */
          onClick={props.onClick}
          edge="end"
          disableRipple
          disableFocusRipple
        >
          {props.rightIcon}
        </IconButton>
      </ListItemSecondaryAction>,
    );
  }
  children.push(<ListItemText key={3} primary={props.primaryText} secondary={props.secondaryText}></ListItemText>);

  if (props.actionType === 'nav') {
    return (
      <MaterialListItem {...muiProps} button classes={classes} tabIndex={0} disableRipple onClick={props.onClick}>
        {children}
      </MaterialListItem>
    );
  } else {
    return (
      <MaterialListItem {...muiProps} classes={classes} tabIndex={props.actionType === 'action' ? -1 : 0}>
        {children}
      </MaterialListItem>
    );
  }
};

export default ListItem;
