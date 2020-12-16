import React from 'react'
import BaseComponentProps, {
  BaseComponentChildrenProps,
  BaseComponentClassesProps
} from '../../BaseComponentProps/BaseComponentProps'

export default interface BaseDataDisplayProps extends BaseComponentProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}

export interface BaseDataDisplayChildrenProps
  extends BaseComponentChildrenProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}

export interface BaseDataDisplayClassesProps extends BaseComponentClassesProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}
