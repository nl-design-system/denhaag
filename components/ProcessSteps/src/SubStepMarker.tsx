import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

type SubStepMarkerProps = HTMLAttributes<HTMLDivElement>;

export const SubStepMarker: React.FC<SubStepMarkerProps> = (props) => (
  <div
    className={clsx(
      'denhaag-process-steps__sub-step-marker',
      'denhaag-process-steps__sub-step-marker--checked',
      props.className,
    )}
  />
);

export default SubStepMarker;
