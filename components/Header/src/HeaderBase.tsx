import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderBaseProps = HTMLAttributes<HTMLDivElement>;

export const HeaderBase = ({ children, className, ...props }: HeaderBaseProps) => {
  const classNames = clsx('denhaag-header', className);

  return (
    <header {...props} id="site-header" className={classNames}>
      {children}
    </header>
  );
};

export default HeaderBase;
