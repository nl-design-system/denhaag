import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepContext } from './Step';

export interface StepHeadingProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  current?: boolean;
}

export const StepHeading: React.FC<StepHeadingProps> = ({ children, current, checked }) => {
  const { expanded, setExpanded } = React.useContext(StepContext);

  return (
    <button
      className={clsx(
        'denhaag-process-steps__step-heading',
        checked && 'denhaag-process-steps__step-heading--checked',
        current && 'denhaag-process-steps__step-heading--current',
      )}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      {children}
    </button>
  );
};
