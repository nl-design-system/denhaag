import React, { ColHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableColProps = ColHTMLAttributes<HTMLTableColElement>;

/**
 * TableCol component based on the <col> element.
 * Defines a column within a <Table> and is used for defining common semantics on all common cells. It is generally found within a <TableColGroup> element.
 */
export const TableCol: React.FC<TableColProps> = ({ className, ...props }: TableColProps) => {
  const rootClassNames = clsx('denhaag-table__col', className);
  return (
    <col className={rootClassNames} {...props}>
      {props.children}
    </col>
  );
};
