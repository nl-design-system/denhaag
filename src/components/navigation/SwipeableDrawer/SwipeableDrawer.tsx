import React, { ReactElement } from 'react'
import MaterialSwipeableDrawer from '@material-ui/core/SwipeableDrawer'

export interface SwipeableDrawerProps {
  /**
   * The content of the component.
   */
  children: ReactElement

  /**
   * Disable the backdrop transition.
   */
  disableBackdropTransition?: boolean

  /**
   * If true, touching the screen near the edge of the drawer will not slide in the drawer
   * a bit to promote accidental discovery of the swipe gesture.
   */
  disableDiscovery?: boolean

  /**
   * If true, swipe to open is disabled.
   */
  disableSwipeToOpen?: boolean

  /**
   * Affects how far the drawer must be opened/closed to change his state.
   */
  hysteresis?: number

  /**
   * Defines, from which (average) velocity on,
   * the swipe is defined as complete although hysteresis isn't reached.
   */
  minFlingVelocity?: number

  /**
   * Callback fired when the component requests to be closed.
   * @param event The event source of the callback.
   */
  onClose: (event: object) => void

  /**
   * Callback fired when the component requests to be opened.
   * @param event The event source of the callback.
   */
  onOpen: (event: object) => void

  /**
   * If true, the drawer is open.
   */
  open: boolean

  /**
   * The element is used to intercept the touch events on the edge.
   */
  SwipeAreaProps?: object

  /**
   * The width of the left most (or right most) area in pixels where the drawer can be swiped open from.
   */
  swipeAreaWidth?: number

  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?: number | { enter?: number; exit?: number }
}

/**
 * SwipeableDrawer makes a Drawer component swipeable on mobile devices.
 * @param props The properties of a SwipeableDrawer component.
 * @constructor Constructs an instance of SwipeableDrawer.
 */
export const SwipeableDrawer: React.FC<SwipeableDrawerProps> = (
  props: SwipeableDrawerProps
) => {
  return (
    <MaterialSwipeableDrawer {...props}>
      {props.children}
    </MaterialSwipeableDrawer>
  )
}

export default SwipeableDrawer
