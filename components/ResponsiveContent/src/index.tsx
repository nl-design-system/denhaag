import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';
import './index.scss';

export const ResponsiveContent: React.FC<BaseProps> = (props: BaseProps) => {
  const classNames = clsx('denhaag-responsive-content', props.className);
  return <div className={classNames}>{props.children}</div>;
};

export default ResponsiveContent;
