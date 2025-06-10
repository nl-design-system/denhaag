import React from 'react';
import clsx from 'clsx';

export type LinkListBaseProps = React.HTMLAttributes<HTMLUListElement>;

export const LinkListBase = ({ className, ...props }: LinkListBaseProps) => {
  const classNames = clsx('utrecht-link-list--html-ul', 'utrecht-link-list', className);

  return <ul className={classNames} {...props} />;
};

export default LinkListBase;
