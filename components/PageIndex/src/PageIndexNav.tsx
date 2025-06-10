import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type PageIndexNavProps = HTMLAttributes<HTMLElement>;

export const PageIndexNav = ({ className, ...props }: PageIndexNavProps) => {
  return <nav className={clsx('denhaag-page-index', className)} {...props} />;
};
