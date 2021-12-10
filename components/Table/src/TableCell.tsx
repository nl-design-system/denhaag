import React, { TdHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableCellProps = TdHTMLAttributes<HTMLTableDataCellElement>;

/**
 * TableCell component based on the <td> element.
 * Defines a cell of a table that contains data. It participates in the table model.
 */
export const TableCell: React.FC<TableCellProps> = ({ className, ...props }: TableCellProps) => {
  const rootClassNames = clsx('denhaag-table__cell', className);
  return (
    <td className={rootClassNames} {...props}>
      {props.children}
    </td>
  );
};
