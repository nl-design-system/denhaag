import React from 'react';
import { CardContent as MaterialCardContent } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';
import { CardContentClasses } from './bem-mapping';

export type CardContentProps = BaseProps;

/**
 * Primary UI component for user interaction
 */
export const CardContent: React.FC<CardContentProps> = (props: CardContentProps) => {
  return <MaterialCardContent classes={CardContentClasses}>{props.children}</MaterialCardContent>;
};

/**
 * Default export for CardContent
 */
export default CardContent;
