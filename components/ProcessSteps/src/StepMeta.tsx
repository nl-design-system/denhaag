import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface StepMetaProps extends HTMLAttributes<HTMLDivElement> {
  date?: boolean;
  nested?: boolean;
}

export const StepMeta = ({ date, nested, children }: PropsWithChildren<StepMetaProps>) => (
  <div
    className={clsx(
      'denhaag-process-steps__step-meta',
      date && 'denhaag-process-steps__step-meta--date',
      nested && 'denhaag-process-steps__step-meta--nested',
    )}
  >
    {children}
  </div>
);
