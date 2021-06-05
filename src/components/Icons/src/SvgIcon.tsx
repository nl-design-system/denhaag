import React, { ElementType } from 'react';
import { SvgIcon as MaterialSvgIcon } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface SvgIconProps extends BaseProps {
  /**
   * The color of the component. It supports those theme colors that make sense
   * for this component. You can use the `htmlColor` prop to apply a color
   * attribute to the SVG element.
   */
  color?: 'action' | 'disabled' | 'error' | 'inherit' | 'primary' | 'secondary';
  /**
   * The component used for the root node. Either a string to use a HTML
   * element or a component.
   */
  component?: ElementType;
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure
   * to inherit font size.
   */
  fontSize?: 'default' | 'inherit' | 'large' | 'small';
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor?: string;
  /**
   * The shape-rendering attribute. The behavior of the different options is
   * described on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this
   * property.
   */
  shapeRendering?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision';
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: string;
  /**
   * Allows you to redefine what the coordinates without units mean inside an
   * SVG element. For example, if the SVG element is 500 (width) by 200
   * (height), and you pass viewBox="0 0 50 20", this means that the coordinates
   * inside the SVG will go from the top left corner (0,0) to bottom right
   * (50,20) and each unit will be worth 10px.
   */
  viewBox?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  color = 'inherit',
  component = 'svg',
  fontSize = 'default',
  viewBox = '0 0 24 24',
  shapeRendering = 'auto',
  ...props
}: SvgIconProps) => {
  return (
    <MaterialSvgIcon
      color={color}
      component={component}
      fontSize={fontSize}
      viewBox={viewBox}
      shapeRendering={shapeRendering}
      {...props}
    >
      {props.children}
    </MaterialSvgIcon>
  );
};

export default SvgIcon;
