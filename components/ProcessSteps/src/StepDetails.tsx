import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

interface StepDetailsProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  collapsed?: boolean;
}

export const StepDetails: React.FC<StepDetailsProps> = ({ id, collapsed = false, children }) => (
  <div
    id={id}
    className={clsx('denhaag-process-steps__step-details', collapsed && 'denhaag-process-steps__step-details--hidden')}
  >
    {children}
  </div>
);
