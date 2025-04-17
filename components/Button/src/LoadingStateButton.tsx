import React, { useId } from 'react';
import './index.scss';
import clsx from 'clsx';
import { Button, ButtonProps } from './Button';
import { CheckCircleIcon, SpinnerIcon } from '@gemeente-denhaag/icons';

export interface SendingLoadingStatebuttonLabels {
  default: string;
  loading: string;
  success: string;
  error: string;
}

export type States = 'default' | 'loading' | 'success' | 'error';

export interface LoadingStateButtonProps extends ButtonProps {
  labels?: SendingLoadingStatebuttonLabels;
  currentState?: States;
}

const defaultLabels = {
  default: 'Send request',
  loading: 'Sending...',
  success: 'Success',
  error: 'Error',
} as SendingLoadingStatebuttonLabels;

export const LoadingStateButton = React.forwardRef<HTMLButtonElement, LoadingStateButtonProps>(
  function LoadingStateButton({ labels = defaultLabels, currentState = 'loading', icon, className, ...props }, ref) {
    const generatedId = useId();

    const iconMapping = {
      default: icon,
      loading: <SpinnerIcon />,
      success: <CheckCircleIcon />,
      error: icon,
    };

    const buttonClassNames = clsx(
      'denhaag-button--loading-animation',
      { 'denhaag-button--loading': currentState === 'loading' },
      { 'denhaag-button--error': currentState === 'error' },
      className,
    );
    return (
      <Button
        {...props}
        size="large"
        icon={iconMapping[currentState]}
        iconAlign="end"
        id={generatedId}
        ref={ref}
        className={buttonClassNames}
      >
        <div className="denhaag-button-loading-state-container">
          <div className="denhaag-button-loading-state-current">{labels[currentState]}</div>
          <div className="denhaag-button-loading-states">
            {Object.entries(labels).map((item) => (
              <div key={item[0]} className="denhaag-button-loading-state">
                {item[1]}
              </div>
            ))}
          </div>
        </div>
      </Button>
    );
  },
);

export default LoadingStateButton;
