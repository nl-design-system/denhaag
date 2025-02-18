import React from 'react';
import clsx from 'clsx';
import './index.scss';

export interface ResponsiveContentProps {
  /**
   * The contents of the component.
   */
  children?: React.ReactNode;
  /**
   * Extend the styles of the component by adding new classes.
   */
  className?: string;
}

export const ResponsiveContent = (props: ResponsiveContentProps) => {
  const classNames = clsx('denhaag-responsive-content', props.className);

  return <div className={classNames}>{props.children}</div>;
};

export default ResponsiveContent;
