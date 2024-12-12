import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

type StepBodyProps = HTMLAttributes<HTMLDivElement>;

export const StepBody: React.FC<StepBodyProps> = ({ children }) => {
  return <div className={clsx('denhaag-process-steps__step-body')}>{children}</div>;
};
