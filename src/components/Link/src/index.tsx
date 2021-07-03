import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import { SvgIconProps } from '@gemeente-denhaag/icons';

import './link.css';

import clsx from 'clsx';

export interface LinkProps extends BaseProps, React.AnchorHTMLAttributes<never> {
  /**
   * The URL to which the component redirects
   */
  href: string;

  icon?: React.FC<SvgIconProps>;

  /**
   * If an `icon` is specified, should it be aligned on the left or the right?
   */
  iconAlign?: 'start' | 'end';

  /**
   * Disables the link.
   */
  disabled?: boolean;

  /**
   * Applies focus styling to the link
   */
  focus?: boolean;
}

/**
 * An easily customizable anchor element.
 * @param props The properties of a Link component.
 * @constructor Constructs an instance of Link.
 */
export const Link: React.FC<LinkProps> = ({
  href,
  children = undefined,
  disabled = false,
  focus = false,
  icon = undefined,
  iconAlign = 'end',
}: LinkProps) => {
  const anchorClassName = clsx('denhaag-link', {
    'denhaag-link--disabled': disabled,
    'denhaag-link--focus': focus,
    'denhaag-link--with-icon': icon !== undefined,
  });

  const iconClassName = clsx('denhaag-link__icon', {
    'denhaag-link__icon--start': iconAlign === 'start',
    'denhaag-link__icon--end': iconAlign === 'end',
  });

  const iconWrapped = <span className={iconClassName}>{icon}</span>;

  return (
    <a href={href} className={anchorClassName}>
      {icon !== undefined && iconAlign === 'start' ? iconWrapped : ''}
      {children}
      {icon !== undefined && iconAlign === 'end' ? iconWrapped : ''}
    </a>
  );
};

export default Link;
