import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type LinkGroupListProps = HTMLAttributes<HTMLUListElement>;

export const LinkGroupList: React.FC<LinkGroupListProps> = (props: LinkGroupListProps) => {
  const className = clsx('denhaag-link-group__list', props.className);

  return (
    <ul {...props} className={className}>
      {props.children}
    </ul>
  );
};

export default LinkGroupList;
