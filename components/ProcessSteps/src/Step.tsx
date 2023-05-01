import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export type StepStatus = 'checked' | 'not-checked' | 'current' | 'warning' | 'error';

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  appearance?: StepStatus;
  current?: boolean;
}

export const Step: React.FC<StepProps> = ({ children, current = false, appearance, ...props }) => {
  return (
    <li
      {...props}
      className={clsx('denhaag-process-steps__step', appearance && `denhaag-process-steps__step--${appearance}`)}
      aria-current={current ? 'step' : undefined}
    >
      {children}
    </li>
  );
};
