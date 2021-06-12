import React from 'react';
import MaterialCardHeader from '@material-ui/core/CardHeader';
import BaseProps from '@gemeente-denhaag/baseprops';
import { TypographyProps } from '@material-ui/core';

export interface CardHeaderProps extends BaseProps {
  /**
   * The action to display in the card header.
   */
  action?: React.ReactNode;

  /**
   * The Avatar for the Card Header.
   */
  avatar?: React.ReactNode;

  /**
   * The component to use as the root component. Either a string to use a DOM element or a component
   */
  component?: React.ElementType;

  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography?: boolean;

  /**
   * The content of the component.
   */
  subheader?: React.ReactNode;

  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps?: TypographyProps;

  /**
   * The content of the Card Title.
   */
  title?: React.ReactNode;

  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps?: TypographyProps;
}

/**
 * Primary UI component for user interaction
 */
export const CardHeader: React.FC<CardHeaderProps> = (props: CardHeaderProps) => {
  return <MaterialCardHeader {...props}>{props.children}</MaterialCardHeader>;
};

/**
 * Default export for CardHeader
 */
export default CardHeader;
