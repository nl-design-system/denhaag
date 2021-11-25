import React from 'react';
import { List as MaterialList } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import { ListSubheaderProps } from './ListSubheader';
import { list_classes as classes } from './bem-mapping';

import './mui-override.css';
import './list-item.css';
import './list-item-secondary-action.css';
import './list-item-icon.css';
import './list-item-text.css';
import './list-subheader.css';

export interface ListProps extends Omit<BaseProps, 'classes'> {
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: React.ReactElement<ListSubheaderProps>;
}

/**
 * Primary UI component for user interaction
 */
export const List: React.FC<ListProps> = (props: ListProps) => {
  const materialProps = { subheader: props.subheader };

  return (
    <MaterialList {...materialProps} classes={classes}>
      {props.children}
    </MaterialList>
  );
};

export default List;
