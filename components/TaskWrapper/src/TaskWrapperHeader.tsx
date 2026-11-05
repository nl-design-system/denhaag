import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TaskWrapperHeaderProps = HTMLAttributes<HTMLDivElement>;

export const TaskWrapperHeader = ({ className, children, ...rest }: TaskWrapperHeaderProps) => (
  <div className={clsx('denhaag-task-wrapper__header', className)} {...rest}>
    {children}
  </div>
);

export default TaskWrapperHeader;
