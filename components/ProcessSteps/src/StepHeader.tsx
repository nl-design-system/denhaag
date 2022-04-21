import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepContext } from './Step';

export interface StepHeaderProps extends HTMLAttributes<HTMLButtonElement> {}

export const StepHeader: React.FC<StepHeaderProps> = ({ children, ...props }) => {
  const { context, setContext } = React.useContext(StepContext);

  return (
    <button
      {...props}
      className={clsx(
        'denhaag-process-steps__step-header',
        context.checked && 'denhaag-process-steps__step-header--checked',
        context.current && 'denhaag-process-steps__step-header--current',
      )}
      onClick={() => {
        setContext({ ...context, expanded: !context.expanded });
      }}
      aria-expanded={context.expanded}
    >
      {children}
    </button>
  );
};
