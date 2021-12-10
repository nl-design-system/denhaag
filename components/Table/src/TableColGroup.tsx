import React, { ColgroupHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableColGroupProps = ColgroupHTMLAttributes<HTMLTableColElement>;

/**
 * TableFoot component based on the <tfoot> element.
 * Defines a set of rows summarizing the columns of the table.
 */
export const TableColGroup: React.FC<TableColGroupProps> = ({ className, ...props }: TableColGroupProps) => {
  const rootClassNames = clsx('denhaag-table__colgroup', className);
  return (
    <colgroup className={rootClassNames} {...props}>
      {props.children}
    </colgroup>
  );
};
