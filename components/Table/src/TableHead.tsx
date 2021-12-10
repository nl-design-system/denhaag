import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

/**
 * TableHead component based on the <thead> element.
 * Defines a set of rows defining the head of the columns of the table.
 */
export const TableHead: React.FC<TableHeadProps> = ({ className, ...props }: TableHeadProps) => {
  const rootClassNames = clsx('denhaag-table__head', className);
  return (
    <thead className={rootClassNames} {...props}>
      {props.children}
    </thead>
  );
};
