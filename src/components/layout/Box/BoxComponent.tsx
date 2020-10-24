import React, { ReactElement } from 'react'
import MaterialBox from '@material-ui/core/Box'

export interface BoxComponentProps {
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
 * BoxComponent allows developers to wrap most of the CSS Utility needs.
 * @param clone A boolean indicating whether the Box element should recycle it's children
 * @param children All child elements to be inserted into BoxComponent.
 * @constructor Constructs an instance of BoxComponent.
 */
export const BoxComponent: React.FC<BoxComponentProps> = ({
  clone,
  children
}) => {
  return <MaterialBox clone={clone}>{children}</MaterialBox>
}
