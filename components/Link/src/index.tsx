import React, { AnchorHTMLAttributes, ComponentType } from 'react';
import { SvgIconProps } from '@gemeente-denhaag/icons';
import BasicLink from './BasicLink';
import clsx from 'clsx';
import './index.scss';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactElement<SvgIconProps>;

  iconAlign?: 'start' | 'end';

  disabled?: boolean;

  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

export const Link = ({
  disabled = false,
  icon = undefined,
  iconAlign = 'end',
  tabIndex = 0,
  children,
  Link = BasicLink,
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

  return (
    <Link tabIndex={disabled ? -1 : tabIndex} {...props} className={rootClassNames}>
      {icon !== undefined && iconAlign === 'start' ? icon : ''}
      {children}
      {icon !== undefined && iconAlign === 'end' ? icon : ''}
    </Link>
  );
};

export default Link;

export * from './BasicLink';
