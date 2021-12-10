import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableFootProps = HTMLAttributes<HTMLTableSectionElement>;

/**
 * TableFoot component based on the <tfoot> element.
 * Defines a set of rows summarizing the columns of the table.
 */
export const TableFoot: React.FC<TableFootProps> = ({ className, ...props }: TableFootProps) => {
  const rootClassNames = clsx('denhaag-table__foot', className);
  return (
    <tfoot className={rootClassNames} {...props}>
      {props.children}
    </tfoot>
  );
};
