import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import './index.scss';

export type HeaderContentProps = HTMLAttributes<HTMLDivElement>;

export const HeaderContent = ({ children, className, ...props }: HeaderContentProps) => {
  const classNames = clsx('denhaag-header__content', className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default HeaderContent;
