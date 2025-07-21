import React from 'react';
import clsx from 'clsx';
import './index.scss';

interface Props {
  /**
   * The id attribute is used to specify a unique id for an HTML element.
   */
  id?: string;
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;
  /**
   * Extend the styles of the component by adding new classes.
   */
  className?: string;
}

export const Menu = (props: Props) => {
  const rootClassNames = clsx('denhaag-menu', props.className);
  return (
    <div className={rootClassNames} id={props.id}>
      {props.children}
    </div>
  );
};

export * from './MenuButton';
export * from './mobile/MobileMenu';
export * from './mobile/MobileMenuList';
export * from './mobile/MobileMenuListItem';
export * from './mobile/MobileSubMenu';
