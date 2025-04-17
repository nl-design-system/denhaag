import React from 'react';
import './index.scss';
import clsx from 'clsx';
import { SvgIconProps } from '@gemeente-denhaag/icons';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Simple click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;

  /**
   * Size of the component
   */
  size?: 'medium' | 'large';

  /**
   * Button variant
   */
  variant?: 'primary-action' | 'secondary-action';

  /**
   * Icon to display at the start or the end of the button
   */
  icon?: React.ReactElement<SvgIconProps>;

  /**
   * If an `icon` is specified, should it be aligned on the left or the right?
   */
  iconAlign?: 'start' | 'end';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { icon, className, type = 'button', iconAlign = 'start', ...props },
  ref,
) {
  const buttonClassNames = clsx(
    'denhaag-button',
    {
      'denhaag-button--secondary-action': props.variant === 'secondary-action',
      'denhaag-button--large': props.size === 'large',
      'denhaag-button--start-icon': iconAlign === 'start' && icon !== undefined,
      'denhaag-button--end-icon': iconAlign === 'end',
    },
    className,
  );

  const iconWrapped = icon !== undefined ? <span className={'denhaag-button__icon'}>{icon}</span> : '';

  return (
    <button {...props} ref={ref} type={type} className={buttonClassNames}>
      {iconAlign === 'start' ? iconWrapped : ''}
      <span className={'denhaag-button__label'}>{props.children}</span>
      {iconAlign === 'end' ? iconWrapped : ''}
    </button>
  );
});

/**
 * Default export for Button
 */
export default Button;
