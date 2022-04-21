import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepContext } from './Step';

export interface StepHeadingProps extends HTMLAttributes<HTMLDivElement> {}

export const StepHeading: React.FC<StepHeadingProps> = ({ children, ...props }) => {
  const { context } = React.useContext(StepContext);

  return (
    <div
      {...props}
      className={clsx(
        'denhaag-process-steps__step-heading',
        context.checked && 'denhaag-process-steps__step-heading--checked',
        context.current && 'denhaag-process-steps__step-heading--current',
      )}
    >
      {children}
    </div>
  );
};
