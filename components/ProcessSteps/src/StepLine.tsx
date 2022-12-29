import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';
import { StepStatus } from '.';

type MarkerType = 'main' | 'nested';

interface StepLineProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  from: MarkerType;
  to: MarkerType;
  appearance?: StepStatus;
}

export const StepLine: React.FC<StepLineProps> = ({
  className,
  appearance = 'not-checked',
  from,
  to,
  ...props
}: StepLineProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'denhaag-process-steps__step-line',
        `denhaag-process-steps__step-line--${appearance}`,
        `denhaag-process-steps__step-line--${from}-to-${to}`,
        className,
      )}
    ></div>
  );
};

export default StepLine;
