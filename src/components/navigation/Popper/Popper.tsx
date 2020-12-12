import React, { RefObject } from 'react'
import MaterialPopper from '@material-ui/core/Popper'
import ComponentBaseProps from '../../ComponentBaseProps/ComponentBaseProps'

export interface PopperProps extends ComponentBaseProps {
  /**
   * @ignore
   */
  classes?: object

  /**
   * A HTML element, referenceObject, or a function that returns either.
   */
  anchorEl: HTMLElement

  /**
   * A HTML element, component instance, or function that returns either.
   */
  container?: HTMLElement

  /**
   * Disable the portal behavior.
   */
  disablePortal?: boolean

  /**
   * Always keep the children in the DOM.
   */
  keepMounted?: boolean

  /**
   * Popper.js is based on a "plugin-like" architecture, most of its features are fully encapsulated "modifiers".
   */
  modifiers?: object

  /**
   * If true, the popper is visible.
   */
  open: boolean

  /**
   * Popper placement.
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'

  /**
   * Options provided to the popper.js instance.
   */
  popperOptions?: object

  /**
   * A ref that points to the used popper instance.
   */
  popperRef?: RefObject<any>

  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition?: boolean
}

export const Popper: React.FC<PopperProps> = (props: PopperProps) => {
  return <MaterialPopper {...props}>{props.children}</MaterialPopper>
}

export default Popper
