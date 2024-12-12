import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type StepHeaderProps = HTMLAttributes<HTMLDivElement>;

export const StepHeader: React.FC<StepHeaderProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx('denhaag-process-steps__step-header', className)} {...props}>
      {children}
    </div>
  );
};
