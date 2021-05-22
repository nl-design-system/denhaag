import React from 'react';
import MaterialList from '@material-ui/core/List';
import BaseProps from '@gemeente-denhaag/baseprops';
import ListSubheader from '@gemeente-denhaag/listsubheader';

import { StylesProvider } from '@material-ui/core';
import { list_classes as classes } from './bem-mapping';
import './mui-override.module.css';
import './list.module.css';

export interface ListProps extends BaseProps {
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: React.ElementType<typeof ListSubheader>;
}

/**
 * Primary UI component for user interaction
 */
export const List: React.FC<ListProps> = (props: ListProps) => {
  const subheader = (props.subheader as unknown) as React.ReactElement;
  const materialProps = { ...props, subheader };

  return (
    <StylesProvider injectFirst>
      <MaterialList {...materialProps} classes={classes}>
        {props.children}
      </MaterialList>
    </StylesProvider>
  );
};

export default List;
