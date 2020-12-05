import React from 'react'
import MaterialTabContext from '@material-ui/lab/TabContext'

export interface TabContextProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode

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
