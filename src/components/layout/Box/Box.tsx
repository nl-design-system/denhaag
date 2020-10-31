import React, { ReactElement } from 'react'
import MaterialBox from '@material-ui/core/Box'

export interface BoxProps {
  /**
   * Any other element which will be wrapped in the Box component.
   */
  children?: ReactElement

  /**
   * A boolean indicating whether the Box element should recycle it's children.
   */
  clone: boolean
}

/**
 * Box allows developers to wrap most of the CSS Utility needs.
 * @param props The properties of Box.
 * @constructor Constructs an instance of Box.
 */
export const Box: React.FC<BoxProps> = (props: BoxProps) => {
  return <MaterialBox clone={props.clone}>{props.children}</MaterialBox>
}
