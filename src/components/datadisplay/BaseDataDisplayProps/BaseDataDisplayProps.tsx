import React from 'react'
import ComponentBaseProps, {
  ComponentBaseChildrenProps,
  ComponentBaseClassesProps
} from '../../ComponentBaseProps/ComponentBaseProps'

export default interface BaseDataDisplayProps extends ComponentBaseProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}

export interface BaseDataDisplayChildrenProps
  extends ComponentBaseChildrenProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}

export interface BaseDataDisplayClassesProps extends ComponentBaseClassesProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}
