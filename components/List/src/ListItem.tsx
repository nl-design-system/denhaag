import React, { HTMLAttributes } from 'react';
import { ChevronRightIcon } from '@gemeente-denhaag/icons';
import IconButton from '@gemeente-denhaag/iconbutton';
import { ListItemIcon } from './ListItemIcon';
import { ListItemSecondaryAction } from './ListItemSecondaryAction';
import { ListItemText } from './ListItemText';
import clsx from 'clsx';

import './_list-item.scss';

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * A listitem can be used to navigate, in which case it has a different styling.
   * Use to specify which type of action this item is.
   */
  actionType?: 'nav' | 'action';

  /**
   * The callback fired when clicked
   */
  onClick?: (event: React.MouseEvent | React.TouchEvent) => void;

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
export const ListItem: React.FC<ListItemProps> = ({
  actionType,
  onClick,
  leftIcon,
  rightIcon,
  primaryText,
  secondaryText,
  ...props
}: ListItemProps) => {
  const rootClassNames = clsx(
    'denhaag-list__item',
    {
      'denhaag-list__item--with-secondary': secondaryText,
      'denhaag-list__item--nav': actionType && actionType === 'nav',
    },
    props.className,
  );

  const children = [];

  if (leftIcon) {
    children.push(<ListItemIcon key={0}>{leftIcon}</ListItemIcon>);
  }

  children.push(<ListItemText key={1} primary={primaryText} secondary={secondaryText}></ListItemText>);

  if (actionType === 'nav') {
    children.push(
      <ListItemSecondaryAction key={2}>
        <ChevronRightIcon />
      </ListItemSecondaryAction>,
    );
  } else if (actionType === 'action') {
    children.push(
      <ListItemSecondaryAction key={2}>
        <IconButton className="denhaag-icon-button" aria-label="Action" onClick={onClick}>
          {rightIcon}
        </IconButton>
      </ListItemSecondaryAction>,
    );
  }

  if (actionType === 'nav') {
    return (
      <li {...props} className={rootClassNames}>
        <button className="denhaag-list__item-button" onClick={onClick}>
          {children}
        </button>
      </li>
    );
  }

  return (
    <li {...props} className={rootClassNames}>
      {children}
    </li>
  );
};

export default ListItem;
