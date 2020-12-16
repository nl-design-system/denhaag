import React from 'react'
import { ComponentBaseClassesProps } from '../../ComponentBaseProps/ComponentBaseProps'
export default interface BaseDataDisplayProps
  extends ComponentBaseClassesProps {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the variantMapping prop.
   */
  component?: React.ElementType
}
