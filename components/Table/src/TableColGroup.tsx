import React, { ColgroupHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableColGroupProps = ColgroupHTMLAttributes<HTMLTableColElement>;

/**
 * TableColGroup component based on the <colgroup> element.
 * Defines a group of columns within a table.
 */
export const TableColGroup: React.FC<TableColGroupProps> = ({ className, ...props }: TableColGroupProps) => {
  const rootClassNames = clsx('denhaag-table__colgroup', className);
  return (
    <colgroup className={rootClassNames} {...props}>
      {props.children}
    </colgroup>
  );
};
