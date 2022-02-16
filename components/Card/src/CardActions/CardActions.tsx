import React from 'react';
import { CardActions as MaterialCardActions } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import './card-actions.scss';
import './mui-override.scss';
import { cardActionClasses } from './bem-mapping';

export interface CardActionProps extends BaseProps {
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const CardActions: React.FC<CardActionProps> = (props: CardActionProps) => {
  return (
    <MaterialCardActions classes={cardActionClasses} disableSpacing={props.disableSpacing}>
      {props.children}
    </MaterialCardActions>
  );
};

/**
 * Default export for CardActions
 */
export default CardActions;
