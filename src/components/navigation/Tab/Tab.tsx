import React, { ElementType, ReactElement } from 'react'
import MaterialTab from '@material-ui/core/Tab'

export interface TabsProps {
  /**
   * This prop isn't supported.
   * Use the component prop if you need to change the children structure.
   */
  children: ElementType

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object

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
  disableRipple: boolean

  /**
   * The icon element.
   */
  icon: ReactElement

  /**
   * The label element.
   */
  label: ElementType

  /**
   * You can provide your own value.
   * Otherwise, we fallback to the child position index.
   */
  value?: any

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
export const Tab: React.FC<TabsProps> = (props: TabsProps) => {
  return (
    <MaterialTab
      classes={props.classes}
      disabled={props.disabled ?? false}
      disableFocusRipple={props.disableFocusRipple ?? false}
      disableRipple={props.disableRipple}
      icon={props.icon}
      label={props.label}
      value={props.value}
      wrapped={props.wrapped ?? false}
    >
      {props.children}
    </MaterialTab>
  )
}

export default Tab
