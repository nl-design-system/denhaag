import React from 'react';
import { TabScrollButton as MaterialTabScrollButton } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface TabScrollButtonProps extends BaseProps {
  /**
   * Which direction should the button indicate?
   */
  direction: 'left' | 'right';

  /**
   * If true, the element will be disabled.
   */
  disabled?: boolean;

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: 'horizontal' | 'vertical';
}

/**
 * A TabScrollButton allows users to scroll vertically or horizontally through tabs. Appears and hides based on viewport width.
 * @param props The properties of a TabScrollButton component.
 * @constructor Constructs an instance of TabScrollButton.
 */
export const TabScrollButton: React.FC<TabScrollButtonProps> = (props: TabScrollButtonProps) => {
  return <MaterialTabScrollButton {...props}>{props.children}</MaterialTabScrollButton>;
};

export default TabScrollButton;
