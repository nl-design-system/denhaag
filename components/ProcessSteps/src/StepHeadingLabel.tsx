import React from 'react';
import clsx from 'clsx';

export interface StepHeadingLabelProps {
  checked?: boolean;
  current?: boolean;
}

export const StepHeadingLabel: React.FC<StepHeadingLabelProps> = ({ children, current, checked }) => (
  <div
    className={clsx(
      'denhaag-process-steps__step-heading-label',
      checked && 'denhaag-process-steps__step-heading-label--checked',
      current && 'denhaag-process-steps__step-heading-label--current',
    )}
  >
    {children}
  </div>
);
