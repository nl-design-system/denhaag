import React, { PropsWithChildren } from 'react';

export const SubStepHeading = ({ children }: PropsWithChildren) => (
  <p className={'denhaag-process-steps__sub-step-heading'}>{children}</p>
);

export default SubStepHeading;
