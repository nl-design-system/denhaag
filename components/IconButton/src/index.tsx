import React, { ButtonHTMLAttributes } from 'react';
import './index.scss';
import clsx from 'clsx';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;

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
export const IconButton: React.FC<IconButtonProps> = ({ ...props }: IconButtonProps) => {
  const rootClassNames = clsx('denhaag-icon-button', props.className);

  return (
    <button {...props} className={rootClassNames}>
      {props.children}
    </button>
  );
};
