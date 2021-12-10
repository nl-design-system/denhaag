import React, { ColHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableColProps = ColHTMLAttributes<HTMLTableColElement>;

/**
 * TableFoot component based on the <tfoot> element.
 * Defines a set of rows summarizing the columns of the table.
 */
export const TableCol: React.FC<TableColProps> = ({ className, ...props }: TableColProps) => {
  const rootClassNames = clsx('denhaag-table__col', className);
  return (
    <col className={rootClassNames} {...props}>
      {props.children}
    </col>
  );
};
