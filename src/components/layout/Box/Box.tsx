import React, { ElementType, ReactElement } from 'react'
import MaterialBox from '@material-ui/core/Box'

export interface BoxProps {
  /**
   * Any other element which will be wrapped in the Box component.
   */
  children?: ReactElement

  /**
   * A boolean indicating whether the Box element should recycle it's children.
   */
  clone?: boolean

  /**
   * The component used for the root node. Either a string to use a HTMl element or a component.
   */
  component?: ElementType
}

/**
 * Box allows developers to wrap most of the CSS Utility needs.
 * @param props The properties of Box.
 * @constructor Constructs an instance of Box.
 */
export const Box: React.FC<BoxProps> = (props: BoxProps) => {
  return <MaterialBox {...props}>{props.children}</MaterialBox>
}

/**
 * Default export for Box
 */
export default Box
