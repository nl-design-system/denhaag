import React from 'react'
import MaterialTabList from '@material-ui/lab/TabList'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

/**
 * Wraps Tab components in a single list.
 * @param props The properties of a TabList component.
 * @constructor Constructs an instance of TabList.
 */
export const TabList: React.FC<ComponentBaseProps> = (
  props: ComponentBaseProps
) => {
  return <MaterialTabList {...props}>{props.children}</MaterialTabList>
}

export default TabList
