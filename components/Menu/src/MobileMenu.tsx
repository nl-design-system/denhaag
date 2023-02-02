import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';

export interface MobileMenuProps extends HTMLAttributes<HTMLElement> {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const classNames = clsx('denhaag-mobile-menu-list');

  return (
    <div className={classNames}>
      <button>Onderwerpen</button>
      <ChevronDownIcon className="denhaag-mobile-menu-icon" />
    </div>
  );
};

export default MobileMenu;
