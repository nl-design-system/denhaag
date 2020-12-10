import React from 'react'
import MaterialListItemIcon from '@material-ui/core/ListItemIcon'

export interface ListItemIconProps {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
   */
  children: React.ReactNode | React.ReactNode[]
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes?: object
}

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (
  props: ListItemIconProps
) => {
  return (
    <MaterialListItemIcon {...props}>{props.children}</MaterialListItemIcon>
  )
}

export default ListItemIcon
