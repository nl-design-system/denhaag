import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

/**
 * Table component
 */
export const TableRow: React.FC<TableRowProps> = ({ className, ...props }: TableRowProps) => {
  const rootClassNames = clsx('denhaag-table__row', className);
  return (
    <tr className={rootClassNames} {...props}>
      {props.children}
    </tr>
  );
};
