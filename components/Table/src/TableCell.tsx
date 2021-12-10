import React, { TdHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableCellProps = TdHTMLAttributes<HTMLTableDataCellElement>;

/**
 * Table component
 */
export const TableCell: React.FC<TableCellProps> = ({ className, ...props }: TableCellProps) => {
  const rootClassNames = clsx('denhaag-table__cell', className);
  return (
    <td className={rootClassNames} {...props}>
      {props.children}
    </td>
  );
};
