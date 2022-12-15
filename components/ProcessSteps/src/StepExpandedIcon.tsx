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
        !context.collapsed && 'denhaag-process-steps__step-expanded-icon--expanded',
        className,
      )}
    >
      {context.collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
    </div>
  );
};

export default StepExpandedIcon;
