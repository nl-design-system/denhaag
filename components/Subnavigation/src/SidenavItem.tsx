import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export type SubnavigationItemProps = LiHTMLAttributes<HTMLLIElement>;

export const SidenavItem: React.FC<SubnavigationItemProps> = (props: SubnavigationItemProps) => {
  const className = clsx('denhaag-sidenav__item', props.className);

  return (
    <li {...props} className={className}>
      {props.children}
    </li>
  );
};

export default SidenavItem;
