import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';

export interface StepHeaderToggleProps extends HTMLAttributes<HTMLButtonElement> {
  ariaControls: string;
  expanded: boolean;
  onClick: () => void;
}

export const StepHeaderToggle: React.FC<StepHeaderToggleProps> = ({
  children,
  className,
  ariaControls,
  expanded,
  onClick,
  ...props
}) => {
  return (
    <button
      aria-controls={ariaControls}
      className={clsx(
        'utrecht-button',
        'utrecht-button--subtle',
        'denhaag-process-steps__step-header-toggle',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
      {expanded ? (
        <ChevronUpIcon className={clsx('denhaag-process-steps__step-header-toggle-icon')} />
      ) : (
        <ChevronDownIcon className={clsx('denhaag-process-steps__step-header-toggle-icon')} />
      )}
    </button>
  );
};
