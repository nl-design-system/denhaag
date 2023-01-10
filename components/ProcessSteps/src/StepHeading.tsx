import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepStatus } from '.';

export interface StepHeadingProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: StepStatus;
}

export const StepHeading: React.FC<StepHeadingProps> = ({ children, appearance = 'not-checked', ...props }) => {
  return (
    <p
      {...props}
      className={clsx('denhaag-process-steps__step-heading', `denhaag-process-steps__step-heading--${appearance}`)}
    >
      {children}
    </p>
  );
};
