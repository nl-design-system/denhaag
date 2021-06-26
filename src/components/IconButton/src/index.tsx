import React from 'react';
import { StylesProvider } from '@material-ui/core';
import MaterialIconButton from '@material-ui/core/IconButton';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';

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
   * If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below,
   * without ruining the border size and shape).
   */
  edge?: 'start' | 'end' | false;

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size?: 'small' | 'medium';

  /**
   * Callback fired when the IconButton is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

/**
 * Displays a Button with an Icon as content.
 * @param props The properties of an IconButton component.
 * @constructor Constructs an instance of IconButton.
 */
export const IconButton: React.FC<IconButtonProps> = ({
  color = 'inherit',
  edge = false,
  size = 'medium',
  disabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <StylesProvider injectFirst>
      <MaterialIconButton
        className="denhaag-icon-button"
        color={color}
        disabled={disabled}
        disableRipple
        disableFocusRipple
        edge={edge}
        size={size}
        {...props}
      >
        {props.children}
      </MaterialIconButton>
    </StylesProvider>
  );
};

export default IconButton;
