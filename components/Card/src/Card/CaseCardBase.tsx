import React, { HTMLAttributes } from 'react';
import '../index.scss';
import clsx from 'clsx';

export type CaseCardBaseProps = HTMLAttributes<HTMLDivElement> & {
  appearance?: 'archived' | 'list';
};

export const CaseCardBase = ({ appearance, className, ...props }: CaseCardBaseProps) => {
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

export default CaseCardBase;
