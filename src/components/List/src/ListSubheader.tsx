import React from 'react';
import { Typography } from '@gemeente-denhaag/typography';

import { listsubheader_classes as classes } from './bem-mapping';
import './mui-override.module.css';
import { StylesProvider } from '@material-ui/core';

export interface ListSubheaderProps {
  /**
   * The text shown in the List subheader
   */
  children: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListSubheader: React.FC<ListSubheaderProps> = (props: ListSubheaderProps) => {
  return (
    <StylesProvider injectFirst>
      <Typography classes={classes}>{props.children}</Typography>
    </StylesProvider>
  );
};

export default ListSubheader;
