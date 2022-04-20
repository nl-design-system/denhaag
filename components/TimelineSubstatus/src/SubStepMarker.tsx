import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SubStepMarkerProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
}

export const SubStepMarker: React.FC<SubStepMarkerProps> = ({ checked }) => (
  <div
    className={clsx(
      'denhaag-process-steps__sub-step-marker',
      checked && 'denhaag-process-steps__sub-step-marker--checked',
    )}
  />
);
