import React, { HTMLAttributes } from 'react';
import Link from '@gemeente-denhaag/link';
import { ArrowLeftIcon } from '@gemeente-denhaag/icons';
import './index.scss';

export interface FormProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max: number;
  previousHref?: string;
  previousLabel?: string;
  stepLabel?: string;
  ofLabel?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FormProgress: React.FC<FormProgressProps> = ({
  value,
  max,
  previousHref = 'javascript:history.back()',
  previousLabel = 'Vorige stap',
  stepLabel = 'Stap',
  ofLabel = 'van',
  ...props
}: FormProgressProps) => {
  return (
    <div className="denhaag-form-progress" {...props}>
      <div className="denhaag-form-progress__header">
        {value > 1 && (
          <div className="denhaag-form-progress__previous">
            <Link href={previousHref} icon={<ArrowLeftIcon />} iconAlign="start">
              {previousLabel}
            </Link>
          </div>
        )}
        <label className="denhaag-form-progress__label" htmlFor="denhaag-form-progress-bar">
          {stepLabel} {value} {ofLabel} {max}
        </label>
      </div>
      <progress
        id="denhaag-form-progress-bar"
        className="denhaag-form-progress__progress"
        max={max}
        value={value}
      ></progress>
    </div>
  );
};

/**
 * Default export for FormProgress
 */
export default FormProgress;
