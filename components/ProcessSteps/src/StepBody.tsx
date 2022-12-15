import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { StepContext } from './Step';

interface StepBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const StepBody: React.FC<StepBodyProps> = ({ children }) => {
  const { context } = React.useContext(StepContext);
  const connected = context.checked || (!context.collapsed && context.current);

  return (
    <div
      className={clsx('denhaag-process-steps__step-body', connected && 'denhaag-process-steps__step-body--connected')}
    >
      {children}
    </div>
  );
};
