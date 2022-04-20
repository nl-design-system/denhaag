import React, { OlHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepListProps extends OlHTMLAttributes<HTMLOListElement> {}

export const StepList: React.FC<StepListProps> = ({ className, children, ...props }: StepListProps) => (
  <ol {...props} className={clsx('denhaag-process-steps', className)}>
    {children}
  </ol>
);
