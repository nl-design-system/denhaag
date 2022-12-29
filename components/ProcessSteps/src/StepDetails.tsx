import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface StepDetailsProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  expanded?: boolean;
}

export const StepDetails: React.FC<StepDetailsProps> = ({ id, expanded = false, children }) => (
  <div
    id={id}
    className={clsx('denhaag-process-steps__step-details', !expanded && 'denhaag-process-steps__step-details--hidden')}
  >
    {children}
  </div>
);
