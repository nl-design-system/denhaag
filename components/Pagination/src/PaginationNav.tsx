import React from 'react';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const PaginationNav = ({ children, className }: Props) => {
  return <nav className={clsx('denhaag-pagination', className)}>{children}</nav>;
};
