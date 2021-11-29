import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import './button.css';
import clsx from 'clsx';
import { SvgIconProps } from '@gemeente-denhaag/icons';

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
   * Icon to display at the start or the end of the button
   */
  icon?: React.ReactElement<SvgIconProps>;

  /**
   * If an `icon` is specified, should it be aligned on the left or the right?
   */
  iconAlign?: 'start' | 'end';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ iconAlign = 'start', ...props }: ButtonProps) => {
  const rootClassNames = clsx('denhaag-button', {
    'denhaag-button--secondary-action': props.variant === 'secondary-action',
    'denhaag-button--large': props.size === 'large',
    'denhaag-button--start-icon': iconAlign === 'start',
    'denhaag-button--end-icon': iconAlign === 'end',
  });
  const iconWrapped = props.icon !== undefined ? <span className={'denhaag-button__icon'}>{props.icon}</span> : '';

  return (
    <button className={rootClassNames} onClick={props.onClick} disabled={props.disabled} type={props.type}>
      {iconAlign === 'start' ? iconWrapped : ''}
      <span className={'denhaag-button__label'}>{props.children}</span>
      {iconAlign === 'end' ? iconWrapped : ''}
    </button>
  );
};

/**
 * Default export for Button
 */
export default Button;
