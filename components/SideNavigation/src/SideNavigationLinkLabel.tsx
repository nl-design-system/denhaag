import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type SideNavigationLinkLabelProps = HTMLAttributes<HTMLSpanElement>;

export const SideNavigationLinkLabel = (props: SideNavigationLinkLabelProps) => {
  const classNames = clsx('denhaag-side-navigation__link-label', props.className);

  return <span className={classNames} {...props} />;
};

export default SideNavigationLinkLabel;
