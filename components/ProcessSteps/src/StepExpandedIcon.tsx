import React, { HTMLAttributes } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@gemeente-denhaag/icons';
import clsx from 'clsx';
import { StepContext } from './Step';

export interface StepExpandedIconProps extends HTMLAttributes<HTMLDivElement> {}

export const StepExpandedIcon: React.FC<StepExpandedIconProps> = ({ className, ...props }) => {
  const { context } = React.useContext(StepContext);

  return (
    <div
      {...props}
      className={clsx(
        'denhaag-process-steps__step-expanded-icon',
        context.expanded && 'denhaag-process-steps__step-expanded-icon--expanded',
        className,
      )}
    >
      {context.expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </div>
  );
};

export default StepExpandedIcon;
