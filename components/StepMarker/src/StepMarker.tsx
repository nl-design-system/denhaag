import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepMarkerProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: 'checked' | 'not-checked' | 'current' | 'warning' | 'error' | 'disabled' | 'default';
  nested?: boolean; // TODO: remove, rename class to subtle when there are no children
}

export const StepMarker = ({ children, appearance = 'not-checked', nested, ...props }: StepMarkerProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'denhaag-step-marker',
        `denhaag-step-marker--${appearance}`,
        nested && 'denhaag-step-marker--nested',
      )}
    >
      {children}
    </div>
  );
};

export default StepMarker;
