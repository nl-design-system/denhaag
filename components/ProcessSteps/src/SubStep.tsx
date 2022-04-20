import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SubStepProps extends LiHTMLAttributes<HTMLLIElement> {
  checked?: boolean;
}

export const SubStep: React.FC<SubStepProps> = ({ children, checked }) => (
  <li className={clsx('denhaag-process-steps__sub-step', checked && 'denhaag-process-steps__sub-step--checked')}>
    {children}
  </li>
);

export default SubStep;
