import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SidenavListProps = HTMLAttributes<HTMLUListElement>;

export const SidenavList: React.FC<SidenavListProps> = (props: SidenavListProps) => {
  const className = clsx('denhaag-sidenav__list', props.className);

  return (
    <ul {...props} className={className}>
      {props.children}
    </ul>
  );
};

export default SidenavList;
