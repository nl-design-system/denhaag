import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderLogoContainerProps = HTMLAttributes<HTMLDivElement>;

export const HeaderLogoContainer = ({ children, className, ...props }: HeaderLogoContainerProps) => {
  const classNames = clsx('denhaag-header__logo-container', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default HeaderLogoContainer;
