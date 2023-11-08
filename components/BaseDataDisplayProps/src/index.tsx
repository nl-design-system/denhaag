import React from 'react';

export default interface BaseDataDisplayProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, unknown>;

  /**
   * The tab-index applied to the root element of the component.
   */
  tabIndex?: number;

  /**
   * The id attribute is used to specify a unique id for an HTML element.
   */
  id?: string;

  /**
   * Extend the styles of the component by adding new classes.
   */
  className?: string;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}

export interface BaseDataDisplayChildrenProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}

export interface BaseDataDisplayClassesProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<string, unknown>;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType;
}
