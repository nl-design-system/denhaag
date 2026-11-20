import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TaskWrapperBodyProps = HTMLAttributes<HTMLDivElement>;

export const TaskWrapperBody = ({ className, children, ...rest }: TaskWrapperBodyProps) => (
  <div className={clsx('denhaag-task-wrapper__body', className)} {...rest}>
    {children}
  </div>
);

export default TaskWrapperBody;
