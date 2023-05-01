import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepMarkerProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: 'checked' | 'not-checked' | 'current' | 'warning' | 'error' | 'disabled';
  nested?: boolean;
}

export const StepMarker = ({ children, appearance, nested, ...props }: StepMarkerProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'denhaag-step-marker',
        appearance && `denhaag-step-marker--${appearance}`,
        nested && 'denhaag-step-marker--nested',
      )}
    >
      {children}
    </div>
  );
};

export default StepMarker;
