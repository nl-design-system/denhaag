import React from 'react';
import BaseProps from '@gemeente-denhaag/baseprops';
import clsx from 'clsx';
import './index.scss';

export interface FooterProps extends Omit<BaseProps, 'tabIndex' | 'classNamees' | 'children'> {
  /**
   * The navigation component
   */
  navigation?: React.ReactElement;
}

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const classNames = clsx('denhaag-footer', props.className);

  return <footer className={classNames}></footer>;
};

export default Footer;
