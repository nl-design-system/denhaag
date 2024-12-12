import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CardActionsProps = HTMLAttributes<HTMLDivElement>;

export const CardActions = ({ className, ...props }: CardActionsProps) => {
  const classNames = clsx('denhaag-card__actions', className);
  return <div className={classNames} {...props}></div>;
};

export default CardActions;
