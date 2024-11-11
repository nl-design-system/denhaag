import React from 'react';
import clsx from 'clsx';

export interface LinkListProps {
  children: React.ReactNode;
}

export const LinkList = ({ children }: LinkListProps) => {
  const classNames = clsx('utrecht-link-list--html-ul', 'utrecht-link-list');

  return <ul className={classNames}>{children}</ul>;
};

export default LinkList;
