import React from 'react'
import MaterialListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { BaseChildrenProps } from '@gemeente-denhaag/baseprops/BaseProps'

export interface ListItemSecondaryActionProps extends BaseChildrenProps {}

/**
 * Primary UI component for user interaction
 */
export const ListItemSecondaryAction: React.FC<ListItemSecondaryActionProps> = (
  props: ListItemSecondaryActionProps
) => {
  return <MaterialListItemSecondaryAction {...props}>{props.children}</MaterialListItemSecondaryAction>
}

export default ListItemSecondaryAction
