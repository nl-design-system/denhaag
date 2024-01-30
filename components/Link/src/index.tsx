import React, { AnchorHTMLAttributes } from 'react';
import { SvgIconProps } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

import './index.scss';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Icon to display at the start or the end of the link
   */
  icon?: React.ReactElement<SvgIconProps>;

  disabled?: boolean;

  /**
   * If an `icon` is specified, should it be aligned on the left or the right?
   */
  iconAlign?: 'start' | 'end';

  component?: React.ElementType<AnchorHTMLAttributes<HTMLAnchorElement>> | undefined;
}

/**
 * An easily customizable anchor element.
 * @param props The properties of a Link component.
 * @constructor Constructs an instance of Link.
 */
export const Link = ({
  disabled = false,
  icon = undefined,
  iconAlign = 'end',
  tabIndex = 0,
  children,
  component,
  ...props
}: LinkProps) => {
  const rootClassNames = clsx(
    'denhaag-link',
    {
      'denhaag-link--disabled': disabled,
      'denhaag-link--with-icon': icon !== undefined,
      'denhaag-link--with-icon-start': icon !== undefined && iconAlign === 'start',
      'denhaag-link--with-icon-end': icon !== undefined && iconAlign === 'end',
    },
    props.className,
  );

  const Component = component || 'a';

  const iconClassName = clsx('denhaag-link__icon');

  const iconWrapped = <span className={iconClassName}>{icon}</span>;

  return (
    <Component tabIndex={disabled ? -1 : tabIndex} {...props} className={rootClassNames}>
      {icon !== undefined && iconAlign === 'start' ? iconWrapped : ''}
      <span>{children}</span>
      {icon !== undefined && iconAlign === 'end' ? iconWrapped : ''}
    </Component>
  );
};

export default Link;

export * from './CustomLink';
