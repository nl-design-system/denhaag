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
      'denhaag-process-steps__step',
      checked && 'denhaag-process-steps__step--checked',
      current && 'denhaag-process-steps__step--current',
      expanded && 'denhaag-process-steps__step--expanded',
    )}
    aria-current={current ? 'step' : undefined}
  >
    {children}
  </li>
);
