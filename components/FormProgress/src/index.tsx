import React, { HTMLAttributes } from 'react';
import Link from '@gemeente-denhaag/link';
import { ArrowLeftIcon } from '@gemeente-denhaag/icons';
import './index.scss';

export interface FormProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max: number;
  label: string;
  previousHref?: string;
  previousLabel?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FormProgress: React.FC<FormProgressProps> = ({
  value,
  max,
  label,
  previousHref = 'javascript:history.back()',
  previousLabel = 'Vorige stap',
  id = 'denhaag-form-progress-bar',
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
        <label className="denhaag-form-progress__label" htmlFor={id}>
          {label}
        </label>
      </div>
      <progress id={id} className="denhaag-form-progress__progress" max={max} value={value}></progress>
    </div>
  );
};

/**
 * Default export for FormProgress
 */
export default FormProgress;
