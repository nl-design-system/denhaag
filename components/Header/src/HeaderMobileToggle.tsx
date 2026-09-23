import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderMobileToggleProps = HTMLAttributes<HTMLButtonElement>;

export const HeaderMobileToggle = ({ children, className, ...props }: HeaderMobileToggleProps) => {
  const classNames = clsx('denhaag-header__mobile-toggle', className);

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default HeaderMobileToggle;
