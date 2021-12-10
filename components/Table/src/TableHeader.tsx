import React, { ThHTMLAttributes } from 'react';
import clsx from 'clsx';

export type TableHeaderProps = ThHTMLAttributes<HTMLTableHeaderCellElement>;

/**
 * TableHeader component based on the <th> element.
 * Defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 */
export const TableHeader: React.FC<TableHeaderProps> = ({ className, ...props }: TableHeaderProps) => {
  const rootClassNames = clsx('denhaag-table__header', className);
  return (
    <th className={rootClassNames} {...props}>
      {props.children}
    </th>
  );
};
