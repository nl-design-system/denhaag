import React from 'react';
import { IconButton as MaterialIconButton } from '@material-ui/core';
import BaseProps from '@gemeente-denhaag/baseprops';
import './mui-override.css';
import './iconbutton.css';

export interface IconButtonProps extends BaseProps {
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;

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
export const IconButton: React.FC<IconButtonProps> = ({ disabled = false, ...props }: IconButtonProps) => {
  return (
    <MaterialIconButton className="denhaag-icon-button" disabled={disabled} disableRipple disableFocusRipple {...props}>
      {props.children}
    </MaterialIconButton>
  );
};

export default IconButton;
