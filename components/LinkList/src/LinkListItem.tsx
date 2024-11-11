import React from 'react';
import clsx from 'clsx';

export interface LinkListItemProps {
  children: React.ReactNode;
}

export const LinkListItem = ({ children }: LinkListItemProps) => {
  const classNames = clsx('utrecht-link-list__item');

  return <li className={classNames}>{children}</li>;
};

export default LinkListItem;
