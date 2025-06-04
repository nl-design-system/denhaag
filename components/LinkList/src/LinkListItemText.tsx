import React from 'react';
import clsx from 'clsx';

export type LinkListItemTextProps = React.HTMLAttributes<HTMLSpanElement>;

export const LinkListItemText = ({ className, ...props }: LinkListItemTextProps) => {
  const classNames = clsx('utrecht-link-list__link-text', className);

  return <span className={classNames} {...props} />;
};

export default LinkListItemText;
