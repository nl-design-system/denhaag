import React from 'react'
import MaterialTabPanel from '@material-ui/lab/TabPanel'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface TabPanelProps extends ComponentBaseProps {
  /**
   * The value of the corresponding Tab.
   * Must use the index of the Tab when no value was passed to Tab
   */
  value: string
}

/**
 * A wrapper for the selected Tab component in a Tabs component.
 * @param props The properties of a TabPanel component.
 * @constructor Constructs an instance of TabPanel.
 */
export const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  return <MaterialTabPanel {...props}>{props.children}</MaterialTabPanel>
}

export default TabPanel
