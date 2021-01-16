import React from 'react'
import MaterialListItemIcon from '@material-ui/core/ListItemIcon'
import BaseProps from '@gemeente-denhaag/baseprops/BaseProps'

export interface ListItemIconProps extends BaseProps {}

/**
 * Primary UI component for user interaction
 */
export const ListItemIcon: React.FC<ListItemIconProps> = (props: ListItemIconProps) => {
  return <MaterialListItemIcon {...props}>{props.children}</MaterialListItemIcon>
}

export default ListItemIcon
