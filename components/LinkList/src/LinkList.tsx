import React from 'react';
import clsx from 'clsx';

export type LinkListProps = React.HTMLAttributes<HTMLUListElement>;

export const LinkList = ({ className, ...props }: LinkListProps) => {
  const classNames = clsx('utrecht-link-list--html-ul', 'utrecht-link-list', className);

  return <ul className={classNames} {...props} />;
};

export default LinkList;
