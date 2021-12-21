import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

/**
 * TableRow component based on the <tr> element.
 * Defines a row of cells in a table. The row's cells can then be established using a mix of <TableCell> (<td>) and <TableHeader> (<th>) elements.
 */
export const TableRow: React.FC<TableRowProps> = ({ className, tabIndex = 0, ...props }: TableRowProps) => {
  const rootClassNames = clsx('denhaag-table__row', className);
  return (
    <tr className={rootClassNames} {...props} tabIndex={tabIndex}>
      {props.children}
    </tr>
  );
};
