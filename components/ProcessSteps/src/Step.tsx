import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export type StepStatus = 'checked' | 'not-checked' | 'current' | 'warning' | 'error' | 'default';

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  appearance?: StepStatus;
  current?: boolean;
}

export const Step: React.FC<StepProps> = ({ children, current = false, appearance = 'not-checked', ...props }) => {
  return (
    <li
      {...props}
      className={clsx('denhaag-process-steps__step', `denhaag-process-steps__step--${appearance}`)}
      aria-current={current ? 'step' : undefined}
    >
      {children}
    </li>
  );
};
