import React from 'react'
import MaterialDrawer from '@material-ui/core/Drawer'
import BaseProps from '../../BaseProps/BaseProps'

export interface DrawerProps extends BaseProps {
  /**
   * Side from which the drawer will appear.
   */
  anchor?: 'bottom' | 'left' | 'right' | 'top'

  /**
   * The elevation of the drawer.
   */
  elevation?: number

  /**
   * Props applied to the Modal element.
   */
  ModalProps?: Record<string, unknown>

  /**
   * Callback fired when the component requests to be closed.
   * @param event The event source of the callback.
   */
  onClose: (event: React.SyntheticEvent) => void

  /**
   * If true, the drawer is open.
   */
  open?: boolean

  /**
   * Props applied to the Paper element.
   */
  PaperProps?: Record<string, unknown>

  /**
   * Props applied to the Slide element.
   */
  SlideProps?: Record<string, unknown>

  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?:
    | number
    | {
        appear?: number
        enter?: number
        exit?: number
      }

  /**
   * The variant to use.
   */
  variant?: 'permanent' | 'persistent' | 'temporary'
}

/**
 * Drawers provide access to destinations in your app.
 * @param props The properties of a Drawer component.
 * @constructor Constructs an instance of Drawer.
 */
export const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  return <MaterialDrawer {...props}>{props.children}</MaterialDrawer>
}

export default Drawer
