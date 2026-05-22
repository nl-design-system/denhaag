import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '@gemeente-denhaag/iconbutton';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

export type SideNavigationExpandIconProps = IconButtonProps;

export const SideNavigationExpandButton = (props: SideNavigationExpandIconProps) => {
  const className = clsx(
    'denhaag-side-navigation__expand-button',
    { 'denhaag-side-navigation__expand-button--expanded': props['aria-expanded'] },
    props.className,
  );

  return (
    <IconButton {...props} className={className}>
      <ChevronDownIcon />
    </IconButton>
  );
};

export default SideNavigationExpandButton;
