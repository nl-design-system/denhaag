import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TaskWrapperBaseProps = HTMLAttributes<HTMLDivElement>;

export const TaskWrapperBase = ({ className, children, ...rest }: TaskWrapperBaseProps) => (
  <div className={clsx('denhaag-task-wrapper', className)} {...rest}>
    {children}
  </div>
);

export default TaskWrapperBase;
