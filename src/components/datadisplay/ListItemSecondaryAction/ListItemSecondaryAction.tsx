import React from 'react'
import MaterialListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

export interface ListItemSecondaryActionProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode | React.ReactNode[]
}

/**
 * Primary UI component for user interaction
 */
export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props: ListItemSecondaryActionProps
) => {
  return (
    <MaterialListItemSecondaryAction {...props}>
      {props.children}
    </MaterialListItemSecondaryAction>
  )
}

export default ListItemSecondaryAction
