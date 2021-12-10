import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

/**
 * Table component
 */
export const TableBody: React.FC<TableBodyProps> = ({ className, ...props }: TableBodyProps) => {
  const rootClassNames = clsx('denhaag-table__body', className);
  return (
    <tbody className={rootClassNames} {...props}>
      {props.children}
    </tbody>
  );
};
