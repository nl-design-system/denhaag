import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';
import { StepStatus } from '.';

export interface SubStepProps extends LiHTMLAttributes<HTMLLIElement> {
  appearance?: StepStatus;
}

export const SubStep: React.FC<SubStepProps> = ({ children, appearance = 'not-checked' }) => (
  <li className={clsx('denhaag-process-steps__sub-step', `denhaag-process-steps__sub-step--${appearance}`)}>
    {children}
  </li>
);

export default SubStep;
