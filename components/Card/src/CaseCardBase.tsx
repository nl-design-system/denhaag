import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { CaseCardAppearance } from './CaseCard';

export type CaseCardBaseProps = HTMLAttributes<HTMLDivElement> & {
  appearance?: CaseCardAppearance;
};

export const CaseCardBase = ({ appearance = 'default', className, ...props }: CaseCardBaseProps) => {
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
