import React, { ReactElement } from 'react'
import MaterialTabScrollButton from '@material-ui/core/TabScrollButton'

export interface TabScrollButtonProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: object

  /**
   * The content of the component
   */
  children: ReactElement

  /**
   * Which direction should the button indicate?
   */
  direction: 'left' | 'right'

  /**
   * If true, the element will be disabled.
   */
  disabled?: boolean

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: 'horizontal' | 'vertical'
}

/**
 * A TabScrollButton allows users to scroll vertically or horizontally through tabs. Appears and hides based on viewport width.
 * @param props The properties of a TabScrollButton component.
 * @constructor Constructs an instance of TabScrollButton.
 */
export const TabScrollButton: React.FC<TabScrollButtonProps> = (
  props: TabScrollButtonProps
) => {
  return (
    <MaterialTabScrollButton
      classes={props.classes}
      direction={props.direction}
      disabled={props.disabled}
      orientation={props.orientation}
    >
      {props.children}
    </MaterialTabScrollButton>
  )
}

export default TabScrollButton
