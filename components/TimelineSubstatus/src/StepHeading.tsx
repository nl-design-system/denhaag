import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepHeadingProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  current?: boolean;
}

export const StepHeading: React.FC<StepHeadingProps> = ({ children, current, checked }) => (
  <div
    className={clsx(
      'denhaag-timeline__step-heading',
      checked && 'denhaag-timeline__step-heading--checked',
      current && 'denhaag-timeline__step-heading--current',
    )}
  >
    {children}
  </div>
);
