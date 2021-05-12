import React from 'react';
import MaterialCardContent from '@material-ui/core/CardContent';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.module.css';
import { CardContentClasses } from './bem-mapping';
import { StylesProvider } from '@material-ui/core/styles';

export interface CardContentProps extends BaseProps {
  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const CardContent: React.FC<CardContentProps> = (props: CardContentProps) => {
  return (
      <StylesProvider injectFirst>
        <MaterialCardContent classes={CardContentClasses} {...props}>{props.children}</MaterialCardContent>
      </StylesProvider>
  )
};

/**
 * Default export for CardContent
 */
export default CardContent;
