import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepStatus } from '.';

interface SubStepMarkerProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: StepStatus;
}

export const SubStepMarker: React.FC<SubStepMarkerProps> = ({ appearance = 'not-checked', className }) => (
  <div
    className={clsx(
      'denhaag-process-steps__sub-step-marker',
      `denhaag-process-steps__sub-step-marker--${appearance}`,
      className,
    )}
  />
);

export default SubStepMarker;
