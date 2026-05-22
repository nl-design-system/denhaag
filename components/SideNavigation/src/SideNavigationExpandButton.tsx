import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '@gemeente-denhaag/iconbutton';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

export type SideNavigationExpandIconProps = IconButtonProps;

export const SideNavigationExpandButton = React.forwardRef<HTMLButtonElement, SideNavigationExpandIconProps>(
  (props, ref) => {
    const className = clsx(
      'denhaag-side-navigation__expand-button',
      { 'denhaag-side-navigation__expand-button--expanded': props['aria-expanded'] },
      props.className,
    );

    return (
      <IconButton ref={ref} {...props} className={className}>
        <ChevronDownIcon />
      </IconButton>
    );
  },
);

SideNavigationExpandButton.displayName = 'SideNavigationExpandButton';

export default SideNavigationExpandButton;
