import React, { OlHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepListProps extends OlHTMLAttributes<HTMLOListElement> {
  nested?: boolean;
}

export const StepList: React.FC<StepListProps> = ({ className, nested = false, children, ...props }: StepListProps) => (
  <ol {...props} className={clsx('denhaag-process-steps', nested && 'denhaag-process-steps--nested', className)}>
    {children}
  </ol>
);

export default StepList;
