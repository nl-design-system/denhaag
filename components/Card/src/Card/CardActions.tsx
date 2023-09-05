import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

export const CardActions: React.FC<CardActionsProps> = ({ className, ...props }) => {
  const classNames = clsx('denhaag-card__actions', className);
  return <div className={classNames} {...props}></div>;
};

export default CardActions;
