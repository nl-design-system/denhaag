import React from 'react'
import MaterialListItemAvatar from '@material-ui/core/ListItemAvatar'

export interface ListItemAvatarProps {
  /**
   * The content of the component.
   */
  children: React.ReactElement<any, any>
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object
}

/**
 * Primary UI component for user interaction
 */
export const ListItemAvatar: React.FC<ListItemAvatarProps> = (
  props: ListItemAvatarProps
) => {
  return (
    <MaterialListItemAvatar {...props}>{props.children}</MaterialListItemAvatar>
  )
}

export default ListItemAvatar
