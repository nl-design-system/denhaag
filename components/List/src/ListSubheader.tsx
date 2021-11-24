import React from 'react';
import { Typography } from '@material-ui/core';

import { listsubheader_classes as classes } from './bem-mapping';

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
  return <Typography classes={classes}>{props.children}</Typography>;
};

export default ListSubheader;
