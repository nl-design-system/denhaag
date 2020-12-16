import React from 'react'
import MaterialBox from '@material-ui/core/Box'
import { BaseLayoutChildrenProps } from '../BaseLayoutProps/BaseLayoutProps'

export interface BoxProps extends BaseLayoutChildrenProps {}

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
