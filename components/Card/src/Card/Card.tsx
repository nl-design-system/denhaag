import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  appearance?: 'archived' | 'list';
};

export const Card = ({ appearance, className, ...props }: CardProps) => {
  const classNames = clsx(
    'denhaag-case-card',
    {
      'denhaag-case-card--archived': appearance === 'archived',
      'denhaag-case-card--list': appearance === 'list',
    },
    className,
  );

  return <div className={classNames} {...props}></div>;
};

export default Card;
