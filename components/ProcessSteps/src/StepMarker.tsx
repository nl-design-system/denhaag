import React, { LiHTMLAttributes } from 'react';
import { CheckedIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';
import { StepStatus } from '.';

export interface StepMarkerProps extends LiHTMLAttributes<HTMLDivElement> {
  appearance?: StepStatus;
}

export const StepMarker: React.FC<StepMarkerProps> = ({ children, appearance = 'not-checked', ...props }) => {
  return (
    <div
      {...props}
      className={clsx('denhaag-process-steps__step-marker', `denhaag-process-steps__step-marker--${appearance}`)}
    >
      {appearance === 'checked' ? <CheckedIcon /> : children}
    </div>
  );
};

export default StepMarker;
