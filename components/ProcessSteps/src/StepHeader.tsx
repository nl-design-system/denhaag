import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepContext } from './Step';
import StepExpandedIcon from './StepExpandedIcon';

export interface StepHeaderProps extends HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  checked?: boolean;
  current?: boolean;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ children, checked, current, className, ...props }) => {
  const { context, setContext } = React.useContext(StepContext);

  const classNames = clsx(
    'denhaag-process-steps__step-header',
    checked && 'denhaag-process-steps__step-header--checked',
    current && 'denhaag-process-steps__step-header--current',
    className,
  );
  return props['aria-controls'] ? (
    <button
      {...props}
      className={classNames}
      onClick={() => {
        setContext({ ...context, collapsed: !context.collapsed });
      }}
      aria-expanded={!context.collapsed}
    >
      {children}

      <StepExpandedIcon />
    </button>
  ) : (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};
