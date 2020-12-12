import React from 'react'
import MaterialBox from '@material-ui/core/Box'
import BaseLayoutProps from '../BaseLayoutProps/BaseLayoutProps'

export interface Props extends BaseLayoutProps {
  /**
   * @ignore
   */
  classes?: object
}

/**
 * Box allows developers to wrap most of the CSS Utility needs.
 * @param props The properties of Box.
 * @constructor Constructs an instance of Box.
 */
export const Box: React.FC<BaseLayoutProps> = (props: BaseLayoutProps) => {
  return <MaterialBox {...props}>{props.children}</MaterialBox>
}

/**
 * Default export for Box
 */
export default Box
