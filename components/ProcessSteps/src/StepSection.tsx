import React, { HTMLAttributes } from 'react';

export interface StepSectionProps extends HTMLAttributes<HTMLDivElement> {}

export const StepSection: React.FC<StepSectionProps> = ({ children }) => {
  return <div className="denhaag-process-steps__step-section">{children}</div>;
};
