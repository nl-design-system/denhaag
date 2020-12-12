import React from 'react'
import MaterialTabContext from '@material-ui/lab/TabContext'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface TabContextProps extends ComponentBaseProps {
  /**
   * @ignore
   */
  classes?: object

  /**
   * The value of the currently selected Tab.
   */
  value: string
}

/**
 * Serves as a wrapper for the Tabs component.
 * @param props The properties of a TabContext component.
 * @constructor Constructs an instance of TabContext.
 */
export const TabContext: React.FC<TabContextProps> = (
  props: TabContextProps
) => {
  return <MaterialTabContext {...props}>{props.children}</MaterialTabContext>
}

export default TabContext
