import React from 'react';
import MaterialListItemText from '@material-ui/core/ListItemText';
import BaseProps from '@gemeente-denhaag/baseprops';
import { StylesProvider } from '@material-ui/core';
import {
  listitemtext_classes as classes,
  listitemtextprimary_classes,
  listitemtextsecondary_classes,
} from './bem-mapping';
import './mui-override.module.css';
import './listitemtext.module.css';

import { Typography } from '@gemeente-denhaag/typography';

export interface ListItemTextProps extends BaseProps {
  /**
   * The main content text.
   */
  children?: string;

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset?: boolean;

  /**
   * The main content text, alias for children.
   */
  primary?: string;

  /**
   * The secondary content text.
   */
  secondary?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListItemText: React.FC<ListItemTextProps> = (props: ListItemTextProps) => {
  const primary = (
    <StylesProvider injectFirst>
      <Typography classes={listitemtextprimary_classes}>{props.primary}</Typography>
    </StylesProvider>
  );
  const secondary = props.secondary ? (
    <StylesProvider injectFirst>
      <Typography classes={listitemtextsecondary_classes}>{props.secondary}</Typography>
    </StylesProvider>
  ) : undefined;
  return (
    <StylesProvider injectFirst>
      <MaterialListItemText
        {...props}
        primary={primary}
        secondary={secondary}
        disableTypography={true}
        classes={classes}
      >
        {props.children}
      </MaterialListItemText>
    </StylesProvider>
  );
};

export default ListItemText;
