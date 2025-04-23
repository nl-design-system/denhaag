import React, { useId, useMemo } from 'react';
import './index.scss';
import clsx from 'clsx';
import { Button, ButtonProps } from './Button';
import { CheckCircleIcon, SpinnerIcon, StarterIcon } from '@gemeente-denhaag/icons';

export interface LoadingStateButtonLabels {
  default: string;
  loading: string;
  success: string;
  error: string;
}

export type LoadingState = keyof LoadingStateButtonLabels;

export interface StatusButtonProps extends Omit<ButtonProps, 'id' | 'iconAlign'> {
  labels?: LoadingStateButtonLabels;
  currentState?: LoadingState;
}

const DEFAULT_LABELS: LoadingStateButtonLabels = {
  default: 'Send request',
  loading: 'Sending…',
  success: 'Success',
  error: 'Error',
};

export const StatusButton = ({
  labels = DEFAULT_LABELS,
  currentState = 'default',
  disabled,
  icon = <StarterIcon />,
  className,
  ...props
}: StatusButtonProps) => {
  const generatedId = useId();

  const currentIcon = useMemo(() => {
    switch (currentState) {
      case 'loading':
        return <SpinnerIcon />;
      case 'success':
        return <CheckCircleIcon />;
      default:
        return icon;
    }
  }, [currentState, icon]);

  const buttonClassNames = clsx(
    'denhaag-status-button',
    { 'denhaag-status-button--loading': currentState === 'loading' },
    { 'denhaag-status-button--error': currentState === 'error' },
    className,
  );

  return (
    <Button
      {...props}
      icon={currentIcon}
      iconAlign="end"
      id={generatedId}
      disabled={disabled || currentState === 'loading'}
      aria-busy={currentState === 'loading'}
      aria-live="polite"
      className={buttonClassNames}
    >
      <div className="denhaag-status-button-state-container">
        <div className="denhaag-status-button-state-current">{labels[currentState]}</div>
        <div className="denhaag-status-button-states" aria-hidden="true">
          {Object.entries(labels).map(([state, label]) => (
            <div key={state} className="denhaag-status-button-state">
              {label}
            </div>
          ))}
        </div>
      </div>
    </Button>
  );
};

export default StatusButton;
