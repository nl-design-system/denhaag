import React from 'react';
import MaterialIconButton from '@material-ui/core/IconButton';
import BaseProps from '@gemeente-denhaag/baseprops';

export interface IconButtonProps extends BaseProps {
  /**
   * The color of the component.
   * It supports those theme colors that make sense for this component.
   */
  color?: 'default' | 'inherit' | 'primary' | 'secondary';

  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the keyboard focus ripple will be disabled.
   */
  disableFocusRipple?: boolean;

  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple?: boolean;

  /**
   * If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below,
   * without ruining the border size and shape).
   */
  edge?: 'start' | 'end' | false;

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size?: 'small' | 'medium';
}

/**
 * Displays a Button with an Icon as content.
 * @param props The properties of an IconButton component.
 * @constructor Constructs an instance of IconButton.
 */
export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  return <MaterialIconButton {...props}>{props.children}</MaterialIconButton>;
};

export default IconButton;
