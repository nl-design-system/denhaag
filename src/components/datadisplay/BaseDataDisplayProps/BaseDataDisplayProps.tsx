import React from "react";
import BaseProps, { BaseChildrenProps, BaseClassesProps } from "@gemeente-denhaag/baseprops";

export default interface BaseDataDisplayProps extends BaseProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}

export interface BaseDataDisplayChildrenProps extends BaseChildrenProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}

export interface BaseDataDisplayClassesProps extends BaseClassesProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}
