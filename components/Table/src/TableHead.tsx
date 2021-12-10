import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

/**
 * Table component
 */
export const TableHead: React.FC<TableHeadProps> = ({ className, ...props }: TableHeadProps) => {
  const rootClassNames = clsx('denhaag-table__head', className);
  return (
    <thead className={rootClassNames} {...props}>
      {props.children}
    </thead>
  );
};
