import React, { HTMLAttributes } from 'react';
import './card.scss';
import clsx from 'clsx';

export interface CardBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBackground: React.FC<CardBackgroundProps> = ({ className, ...props }) => {
  const classNames = clsx('denhaag-card__background', className);
  return <div className={classNames} {...props}></div>;
};

export default CardBackground;
