// import BaseProps from "@gemeente-denhaag/baseprops";
import BaseProps from '@gemeente-denhaag/baseprops';
import React from 'react';
import MaterialLink from '@material-ui/core/Link';

export interface LinkProps extends BaseProps, React.AnchorHTMLAttributes<never> {
  /**
   * The color of the link.
   */
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;

  /**
   * classes prop applied to the Typography element.
   */
  TypographyClasses?: Record<string, unknown>;

  /**
   * Controls when the link should have an underline.
   */
  underline?: 'none' | 'hover' | 'always';

  /**
   * A function fired upon clicking on the link
   * @param event The registered click event
   */
  onClick?: (event: React.ChangeEvent<unknown>) => void;

  /**
   * The URL to which the component redirects
   */
  href: string;

  /**
   * Applies the theme typography styles.
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'inherit';
}

/**
 * An easily customisable anchor element.
 * @param props The properties of a Link component.
 * @constructor Constructs an instance of Link.
 */
export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  return <MaterialLink {...props}>{props.children}</MaterialLink>;
};

export default Link;
