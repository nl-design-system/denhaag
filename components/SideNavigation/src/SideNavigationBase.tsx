import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SideNavigationBaseProps = HTMLAttributes<HTMLDivElement>;

export const SideNavigationBase = (props: SideNavigationBaseProps) => {
  const className = clsx('denhaag-side-navigation', props.className);

  return <nav className={className} {...props} />;
};

export default SideNavigationBase;
