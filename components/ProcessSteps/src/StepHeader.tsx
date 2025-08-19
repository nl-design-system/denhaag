import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepHeaderProps extends HTMLAttributes<HTMLDivElement> {
  nested?: boolean;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ children, className, nested, ...props }) => {
  return (
    <div
      className={clsx(
        'denhaag-process-steps__step-header',
        { 'denhaag-process-steps__step-header--nested': nested },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
