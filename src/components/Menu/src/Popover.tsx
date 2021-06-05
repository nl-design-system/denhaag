import React from 'react';
import { Popover as MaterialPopover } from '@material-ui/core';
import { PopoverActions, PopoverProps as MaterialPopoverProps } from '@material-ui/core/Popover';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface PopoverProps extends BaseProps {
  /**
   * A ref for imperative actions.
   */
  action: () => React.Ref<PopoverActions>;

  /**
   * A HTML element, or a function that returns it.
   */
  anchorEl?: HTMLElement;

  /**
   * This is the point on the anchor where the popover's anchorEl will attach to.
   */
  anchorOrigin?: {
    horizontal: 'center' | 'left' | 'right' | number;
    vertical: 'bottom' | 'center' | 'top' | number;
  };

  /**
   * This is the position that may be used to set the position of the popover.
   */
  anchorPosition: { left: number; top: number };

  /**
   * This determines which anchor prop to refer to to set the position of the popover.
   */
  anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';

  /**
   * The elevation of the popover.
   */
  elevation: number;

  /**
   * This function is called in order to retrieve the content anchor element.
   */
  getContentAnchorEl: () => HTMLElement;

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold?: number;

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: () => MaterialPopoverProps['onClose'];

  /**
   * Callback fired before the component is entering.
   */
  onEnter: () => MaterialPopoverProps['onEnter'];

  /**
   * Callback fired when the component has entered.
   */
  onEntered: () => MaterialPopoverProps['onEntered'];

  /**
   * Callback fired when the component is entering.
   */
  onEntering: () => MaterialPopoverProps['onEntering'];

  /**
   * Callback fired before the component is exiting.
   */
  onExit: () => MaterialPopoverProps['onExit'];

  /**
   * Callback fired when the component has exited.
   */
  onExited: () => MaterialPopoverProps['onExited'];

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: () => MaterialPopoverProps['onExiting'];

  /**
   * If true, the popover is visible.
   */
  open: boolean;

  /**
   * Props applied to the Paper element.
   */
  PaperProps?: Record<string, unknown>;

  /**
   * This is the point on the popover which will attach to the anchor's origin.
   */
  transformOrigin?: {
    horizontal: 'center' | 'left' | 'right' | number;
    vertical: 'bottom' | 'center' | 'top' | number;
  };

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration?: 'auto' | number | { appear?: number; enter?: number; exit?: number };

  /**
   * Props applied to the Transition element.
   */
  TransitionProps?: Record<string, unknown>;
}

/**
 * A Popover is used to display some content on top of another.
 * @param props The properties of a Popover component.
 * @constructor Constructs an instance of Popover.
 */
export const Popover: React.FC<PopoverProps> = (props: PopoverProps) => {
  return <MaterialPopover {...props}>{props.children}</MaterialPopover>;
};

export default Popover;
