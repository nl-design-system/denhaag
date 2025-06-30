import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export type SideNavigationItemProps = LiHTMLAttributes<HTMLLIElement>;

export const SideNavigationItem = (props: SideNavigationItemProps) => {
  const className = clsx('denhaag-side-navigation__item', props.className);

  return <li className={className} {...props} />;
};

export default SideNavigationItem;
