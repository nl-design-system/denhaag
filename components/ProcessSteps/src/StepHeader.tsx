import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';
import { StepStatus } from '.';

export interface StepHeaderProps extends HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  appearance?: StepStatus;
  expanded?: boolean;
  collapsible?: boolean;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  children,
  appearance = 'not-checked',
  onClick,
  className,
  expanded = false,
  collapsible = false,
  ...props
}) => {
  const classNames = clsx(
    'denhaag-process-steps__step-header',
    `denhaag-process-steps__step-header--${appearance}`,
    className,
  );
  return collapsible ? (
    <button {...props} className={classNames} onClick={onClick} aria-expanded={expanded}>
      {children}
      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </button>
  ) : (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};
