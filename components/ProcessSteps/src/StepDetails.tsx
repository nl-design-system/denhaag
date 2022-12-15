import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { StepContext } from './Step';

interface StepDetailsProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const StepDetails: React.FC<StepDetailsProps> = ({ id, children }) => {
  const { context } = React.useContext(StepContext);
  return (
    <>
      <div
        id={id}
        className={clsx(
          'denhaag-process-steps__step-details',
          context.collapsed && 'denhaag-process-steps__step-details--hidden',
        )}
      >
        {children}
      </div>
    </>
  );
};
