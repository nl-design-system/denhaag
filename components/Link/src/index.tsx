import React, { ComponentType } from 'react';
import { SvgIconProps } from '@gemeente-denhaag/icons';
import BasicLink, { LinkProps as CandidateLinkProps } from './BasicLink';
import clsx from 'clsx';
import './index.scss';

export interface LinkProps extends CandidateLinkProps {
  icon?: React.ReactElement<SvgIconProps>;
  iconAlign?: 'start' | 'end';
  Link?: ComponentType<CandidateLinkProps>;
}

export const Link = ({ icon = undefined, iconAlign = 'end', children, Link = BasicLink, ...props }: LinkProps) => {
  const rootClassNames = clsx(
    'denhaag-link',
    {
      'denhaag-link--disabled': props.disabled,
      'denhaag-link--with-icon': icon !== undefined,
      'denhaag-link--with-icon-start': icon !== undefined && iconAlign === 'start',
      'denhaag-link--with-icon-end': icon !== undefined && iconAlign === 'end',
    },
    props.className,
  );
  const iconClassName = clsx('denhaag-link__icon');
  const iconWrapped = <span className={iconClassName}>{icon}</span>;

  return (
    <Link className={rootClassNames} {...props}>
      {icon !== undefined && iconAlign === 'start' ? iconWrapped : ''}
      {children}
      {icon !== undefined && iconAlign === 'end' ? iconWrapped : ''}
    </Link>
  );
};

export default Link;

export * from './BasicLink';
