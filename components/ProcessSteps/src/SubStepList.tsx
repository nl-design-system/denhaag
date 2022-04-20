import React from 'react';
import clsx from 'clsx';
import { StepContext } from './Step';

export const SubStepList: React.FC = ({ children }) => {
  const { expanded } = React.useContext(StepContext);

  return <ol className={clsx('denhaag-process-steps__sub-step-list', expanded && 'visible')}>{children}</ol>;
};

export default SubStepList;
