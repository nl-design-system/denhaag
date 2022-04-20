import React, { LiHTMLAttributes } from 'react';
import { CheckedIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';

export interface StepMarkerProps extends LiHTMLAttributes<HTMLLIElement> {
  checked?: boolean;
  current?: boolean;
}

export const StepMarker: React.FC<StepMarkerProps> = ({ checked, current, children }) => (
  <div
    className={clsx(
      'denhaag-timeline__step-marker',
      checked && 'denhaag-timeline__step-marker--checked',
      current && 'denhaag-timeline__step-marker--current',
    )}
  >
    {checked ? <CheckedIcon /> : children}
  </div>
);
