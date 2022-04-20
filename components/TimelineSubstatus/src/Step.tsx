import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  checked?: boolean;
  current?: boolean;
  expanded?: boolean;
}

export const Step: React.FC<StepProps> = ({ children, current, checked, expanded }) => (
  <li
    className={clsx(
      'denhaag-timeline__step',
      checked && 'denhaag-timeline__step--checked',
      current && 'denhaag-timeline__step--current',
      expanded && 'denhaag-timeline__step--expanded',
    )}
    aria-current={current ? 'step' : undefined}
  >
    {children}
  </li>
);
