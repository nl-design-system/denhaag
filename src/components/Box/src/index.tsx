import React from "react";
import MaterialBox from "@material-ui/core/Box";
import { BaseLayoutChildrenProps } from "@gemeente-denhaag/baselayoutprops";

export type BoxProps = BaseLayoutChildrenProps;

/**
 * Box allows developers to wrap most of the CSS Utility needs.
 * @param props The properties of Box.
 * @constructor Constructs an instance of Box.
 */
const Box: React.FC<BoxProps> = (props: BoxProps) => {
  return <MaterialBox {...props}>{props.children}</MaterialBox>;
};

/**
 * Default export for Box
 */
export default Box;
