import React, { useId, useMemo } from 'react';
import './index.scss';
import clsx from 'clsx';
import { Button, ButtonProps } from './Button';
import { CheckCircleIcon, SpinnerIcon } from '@gemeente-denhaag/icons';

export interface LoadingStateButtonLabels {
  default: string;
  loading: string;
  success: string;
  error: string;
}

export type LoadingState = keyof LoadingStateButtonLabels;

export interface LoadingStateButtonProps extends Omit<ButtonProps, 'id' | 'size' | 'iconAlign'> {
  labels?: LoadingStateButtonLabels;
  currentState?: LoadingState;
}

const DEFAULT_LABELS: LoadingStateButtonLabels = {
  default: 'Send request',
  loading: 'Sending…',
  success: 'Success',
  error: 'Error',
};

export const LoadingStateButton = React.forwardRef<HTMLButtonElement, LoadingStateButtonProps>(
  function LoadingStateButton(
    { labels = DEFAULT_LABELS, currentState = 'default', disabled, icon, className, ...props },
    ref,
  ) {
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
      'denhaag-button--loading-animation',
      { 'denhaag-button--loading': currentState === 'loading' },
      { 'denhaag-button--error': currentState === 'error' },
      className,
    );

    console.log(disabled);

    return (
      <Button
        {...props}
        size="large"
        icon={currentIcon}
        iconAlign="end"
        id={generatedId}
        ref={ref}
        //disabled={disabled || currentState === 'loading'}
        aria-busy={currentState === 'loading'}
        aria-live="polite"
        className={buttonClassNames}
      >
        <div className="denhaag-button-loading-state-container">
          <div className="denhaag-button-loading-state-current">{labels[currentState]}</div>
          <div className="denhaag-button-loading-states" aria-hidden="true">
            {Object.entries(labels).map(([state, label]) => (
              <div key={state} className="denhaag-button-loading-state">
                {label}
              </div>
            ))}
          </div>
        </div>
      </Button>
    );
  },
);

export default LoadingStateButton;
