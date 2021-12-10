import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

/**
 * TableBody component based on the <tbody> element.
 * Encapsulates a set of <TableRow> (<tr> elements), indicating that they comprise the body of the <Table> (<table>).
 */
export const TableBody: React.FC<TableBodyProps> = ({ className, ...props }: TableBodyProps) => {
  const rootClassNames = clsx('denhaag-table__body', className);
  return (
    <tbody className={rootClassNames} {...props}>
      {props.children}
    </tbody>
  );
};
