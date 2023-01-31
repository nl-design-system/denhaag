import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LinkGroupListItemProps = HTMLAttributes<HTMLLIElement>;

export const LinkGroupListItem: React.FC<LinkGroupListItemProps> = (props: LinkGroupListItemProps) => {
  const className = clsx('denhaag-link-group__list-item', props.className);

  return (
    <li {...props} className={className}>
      {props.children}
    </li>
  );
};

export default LinkGroupListItem;
