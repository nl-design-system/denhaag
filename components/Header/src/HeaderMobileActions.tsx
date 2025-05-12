import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderMobileActionsProps = HTMLAttributes<HTMLDivElement>;

export const HeaderMobileActions = ({ children, className, ...props }: HeaderMobileActionsProps) => {
  const classNames = clsx('denhaag-header__mobile-actions', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default HeaderMobileActions;
