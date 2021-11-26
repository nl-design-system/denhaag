import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './button.css';
import clsx from 'clsx';

export interface ButtonProps extends BaseProps {
  /**
   * Simple click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;

  /**
   * Size of the component
   */
  size?: 'medium' | 'large';

  /**
   * Disables Button
   */
  disabled?: boolean;

  /**
   * Button variant
   */
  variant?: 'primary-action' | 'secondary-action';

  /**
   * HTML type prop
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Icon placed at the start of the button
   */
  startIcon?: React.ReactNode;

  /**
   * Icon placed at the end of the button
   */
  endIcon?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const rootClassNames = clsx('denhaag-button', {
    'denhaag-button--secondary-action': props.variant === 'secondary-action',
    'denhaag-button--large': props.size === 'large',
    'denhaag-button--start-icon': props.startIcon !== undefined,
    'denhaag-button--end-icon': props.endIcon !== undefined,
  });
  const iconWrapped = <span className={'denhaag-button__icon'}>{props.startIcon || props.endIcon}</span>;

  return (
    <button className={rootClassNames} onClick={props.onClick} disabled={props.disabled} type={props.type}>
      {props.startIcon !== undefined ? iconWrapped : ''}
      {props.children}
      {props.endIcon !== undefined ? iconWrapped : ''}
    </button>
  );
};

/**
 * Default export for Button
 */
export default Button;
