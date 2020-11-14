import React, { ReactElement } from 'react'
import MaterialDrawer from '@material-ui/core/Drawer'
import { duration } from '@material-ui/core'

export interface DrawerProps {
  /**
   * Side from which the drawer will appear.
   */
  anchor?: 'bottom' | 'left' | 'right' | 'top'

  /**
   * The contents of the drawer.
   */
  children: ReactElement

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: object

  /**
   * The elevation of the drawer.
   */
  elevation?: number

  /**
   * Props applied to the Modal element.
   */
  ModalProps?: object

  /**
   * Callback fired when the component requests to be closed.
   * @param event The event source of the callback.
   */
  onClose: (event: object) => void

  /**
   * If true, the drawer is open.
   */
  open?: boolean

  /**
   * Props applied to the Paper element.
   */
  PaperProps?: object

  /**
   * Props applied to the Slide element.
   */
  SlideProps: object

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
  return (
    <MaterialDrawer
      anchor={props.anchor ?? 'left'}
      classes={props.classes}
      elevation={props.elevation ?? 16}
      ModalProps={props.ModalProps ?? {}}
      onClose={props.onClose}
      open={props.open ?? false}
      PaperProps={props.PaperProps ?? {}}
      SlideProps={props.SlideProps}
      transitionDuration={
        props.transitionDuration ?? {
          enter: duration.enteringScreen,
          exit: duration.leavingScreen
        }
      }
      variant={props.variant ?? 'temporary'}
    >
      {props.children}
    </MaterialDrawer>
  )
}

export default Drawer
