import React, { LiHTMLAttributes } from 'react';
import { CheckedIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';
import { StepContext } from './Step';

export interface StepMarkerProps extends LiHTMLAttributes<HTMLDivElement> {}

export const StepMarker: React.FC<StepMarkerProps> = ({ children, ...props }) => {
  const { context } = React.useContext(StepContext);

  return (
    <div
      {...props}
      className={clsx(
        'denhaag-process-steps__step-marker',
        context.checked && 'denhaag-process-steps__step-marker--checked',
        context.current && 'denhaag-process-steps__step-marker--current',
      )}
    >
      {context.checked ? <CheckedIcon /> : children}
    </div>
  );
};

export default StepMarker;
