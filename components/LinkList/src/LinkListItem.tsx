import React from 'react';
import clsx from 'clsx';

export type LinkListItemProps = React.HTMLAttributes<HTMLLIElement>;

export const LinkListItem = ({ className, ...props }: LinkListItemProps) => {
  const classNames = clsx('utrecht-link-list__item', className);

  return <li className={classNames} {...props} />;
};

export default LinkListItem;
