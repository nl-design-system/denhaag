import React, { ReactElement } from 'react'
import MaterialTab from '@material-ui/core/Tab'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface TabProps extends ComponentBaseProps {

  /**
   * If true, the tab will be disabled.
   */
  disabled?: boolean

  /**
   * If true, the keyboard focus ripple will be disabled.
   */
  disableFocusRipple?: boolean

  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple?: boolean

  /**
   * The icon element.
   */
  icon?: ReactElement

  /**
   * The label element.
   */
  label: React.ReactNode

  /**
   * You can provide your own value.
   * Otherwise, we fallback to the child position index.
   */
  value: any

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped?: boolean
}

/**
 * Tabs make it easy to explore and switch between different views.
 * @param props The properties of a Tab component.
 * @constructor Construct an instance of Tab.
 */
export const Tab: React.FC<TabProps> = (props: TabProps) => {
  return <MaterialTab {...props} />
}

export default Tab
