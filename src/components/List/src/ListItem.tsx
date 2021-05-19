import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import BaseProps from '@gemeente-denhaag/baseprops';
import { ContainerProps } from '@gemeente-denhaag/container';

import { listitem_classes as classes } from './bem-mapping';
import './mui-override.module.css';
import './listitem.module.css';
import '@gemeente-denhaag/basestyles';
import { ListItemIcon } from './ListItemIcon';
import { ListItemSecondaryAction, ListItemText } from '.';
import { ChevronRightIcon } from '@gemeente-denhaag/icons';
import IconButton from '@gemeente-denhaag/iconbutton';

export interface ListItemProps extends BaseProps {
  /**
   * Defines the `align-items` style property.
   */
  alignItems?: 'flex-start' | 'center';

  /**
   * If `true`, the list item will be focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   */
  autoFocus?: boolean;

  // /**
  //  * If `true`, the list item will be a button (using `ButtonBase`). Props intended
  //  * for `ButtonBase` can then be applied to `ListItem`.
  //  */
  // button?: any;

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

  /**
   * A listitem can be used to navigate, in which case it has a different styling.
   * Use to specify which type of action this item is.
   */
  actionType?: 'nav' | 'action';

  leftIcon?: any;
  rightIcon?: any;

  primaryText: string;

  secondaryText?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const muiProps = { ...props, actionType: props.actionType };

  const children = [];

  if (props.leftIcon) {
    children.push(<ListItemIcon>{props.leftIcon}</ListItemIcon>);
  }
  if (props.actionType === 'nav') {
    children.push(
      <ListItemSecondaryAction>
        {/* @ts-ignore */}
        <IconButton color="inherit" edge="end" aria-label="comments" tabIndex={-1} disableRipple disableFocusRipple>
          <ChevronRightIcon />
        </IconButton>
      </ListItemSecondaryAction>,
    );
  } else if (props.actionType === 'action') {
    children.push(
      <ListItemSecondaryAction>
        <IconButton color="inherit" edge="end" aria-label="comments" disableRipple disableFocusRipple>
          {props.rightIcon}
        </IconButton>
      </ListItemSecondaryAction>,
    );
  }
  children.push(<ListItemText primary={props.primaryText} secondary={props.secondaryText}></ListItemText>);

  if (props.actionType !== undefined) {
    return (
      <MaterialListItem
        {...muiProps}
        button
        classes={classes}
        disableRipple
        tabIndex={props.actionType === 'action' ? -1 : 0}
      >
        {children}
      </MaterialListItem>
    );
  } else {
    return (
      <MaterialListItem {...muiProps} classes={classes} tabIndex={0}>
        {children}
      </MaterialListItem>
    );
  }
};

export default ListItem;
