import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface MobileMenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  large?: boolean;
}

export const MobileMenuButton = ({ large, children, ...props }: MobileMenuButtonProps) => {
  const classNames = clsx(
    'utrecht-button utrecht-button--subtle denhaag-mobile-menu-list-item-button',
    large ? 'denhaag-mobile-menu-list-item-button--large' : '',
  );

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default MobileMenuButton;
