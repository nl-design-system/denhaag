import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface StepMetaProps extends HTMLAttributes<HTMLDivElement> {
  date?: boolean;
}

export const StepMeta = ({ date, children }: PropsWithChildren<StepMetaProps>) => (
  <div className={clsx('denhaag-process-steps__step-meta', date && 'denhaag-process-steps__step-meta--date')}>
    {children}
  </div>
);
