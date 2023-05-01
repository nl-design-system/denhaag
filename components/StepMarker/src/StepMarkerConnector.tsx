import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';

type MarkerType = 'main' | 'nested';
type Appearance = 'checked' | 'not-checked' | 'current' | 'warning' | 'error';

interface StepMarkerConnectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  from: MarkerType;
  to: MarkerType;
  appearance?: Appearance;
}

export const StepMarkerConnector: React.FC<StepMarkerConnectorProps> = ({
  className,
  appearance,
  from,
  to,
  ...props
}: StepMarkerConnectorProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'denhaag-step-marker__connector',
        appearance && `denhaag-step-marker__connector--${appearance}`,
        `denhaag-step-marker__connector--${from}-to-${to}`,
        className,
      )}
    ></div>
  );
};

export default StepMarkerConnector;
