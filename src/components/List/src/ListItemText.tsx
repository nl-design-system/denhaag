import React from 'react';
import MaterialListItemText from '@material-ui/core/ListItemText';
import BaseProps from '@gemeente-denhaag/baseprops';
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
  const primary = <Typography classes={listitemtextprimary_classes}>{props.primary}</Typography>;
  const secondary = props.secondary ? (
    <Typography classes={listitemtextsecondary_classes}>{props.secondary}</Typography>
  ) : undefined;
  return (
    <MaterialListItemText {...props} primary={primary} secondary={secondary} disableTypography={true} classes={classes}>
      {props.children}
    </MaterialListItemText>
  );
};

export default ListItemText;
