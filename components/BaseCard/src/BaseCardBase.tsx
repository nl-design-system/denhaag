import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { BaseCardAppearance } from './BaseCard';

export type BaseCardBaseProps = HTMLAttributes<HTMLDivElement> & {
  appearance?: BaseCardAppearance;
};

export const BaseCardBase = ({ appearance = 'default', className, ...props }: BaseCardBaseProps) => {
  const classNames = clsx(
    'denhaag-base-card',
    {
      'denhaag-base-card--archived': appearance === 'archived',
      'denhaag-base-card--list': appearance === 'list',
    },
    className,
  );

  return <div className={classNames} {...props}></div>;
};

export default BaseCardBase;
