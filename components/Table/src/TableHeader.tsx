import React, { ThHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableHeaderProps = ThHTMLAttributes<HTMLTableHeaderCellElement>;

/**
 * Table component
 */
export const TableCell: React.FC<TableHeaderProps> = ({ className, ...props }: TableHeaderProps) => {
  const rootClassNames = clsx('denhaag-table__header', className);
  return (
    <td className={rootClassNames} {...props}>
      {props.children}
    </td>
  );
};
