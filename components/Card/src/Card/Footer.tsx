import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type FooterProps = HTMLAttributes<HTMLDivElement>;

export const Footer = ({ className, ...props }: FooterProps) => {
  const classNames = clsx('denhaag-case-card__footer', className);
  return <div className={classNames} {...props}></div>;
};

export default Footer;
