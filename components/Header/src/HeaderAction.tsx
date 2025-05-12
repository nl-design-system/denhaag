import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderActionProps = HTMLAttributes<HTMLDivElement>;

export const HeaderAction = ({ children, className, ...props }: HeaderActionProps) => {
  const classNames = clsx('denhaag-header__actions-action', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default HeaderAction;
