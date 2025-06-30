import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SideNavigationListProps = HTMLAttributes<HTMLUListElement>;

export const SideNavigationList = (props: SideNavigationListProps) => {
  const className = clsx('denhaag-side-navigation__list', props.className);

  return <ul className={className} {...props} />;
};

export default SideNavigationList;
