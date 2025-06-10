import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderContentContainerProps = HTMLAttributes<HTMLDivElement>;

export const HeaderContentContainer = ({ children, className, ...props }: HeaderContentContainerProps) => {
  const classNames = clsx('denhaag-header__content-container', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default HeaderContentContainer;
