import React from 'react';
import MaterialCardContent from '@material-ui/core/CardContent';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';
import { CardContentClasses } from './bem-mapping';
import { StylesProvider } from '@material-ui/core/styles';

export type CardContentProps = BaseProps

/**
 * Primary UI component for user interaction
 */
export const CardContent: React.FC<CardContentProps> = (props: CardContentProps) => {
  return (
      <StylesProvider injectFirst>
        <MaterialCardContent classes={CardContentClasses}>{props.children}</MaterialCardContent>
      </StylesProvider>
  )
};

/**
 * Default export for CardContent
 */
export default CardContent;
