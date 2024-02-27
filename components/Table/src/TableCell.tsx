import React, { TdHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  href?: string;
}

/**
 * TableCell component based on the <td> element.
 * Defines a cell of a table that contains data. It participates in the table model.
 */
export const TableCell: React.FC<TableCellProps> = ({ className, href, ...props }: TableCellProps) => {
  const rootClassNames = clsx('denhaag-table__cell', className, {
    'denhaag-table__cell--link': href,
  });

  if (href) {
    return (
      <td className={rootClassNames} {...props}>
        <a href={href}>{props.children}</a>
      </td>
    );
  }

  return (
    <td className={rootClassNames} {...props}>
      {props.children}
    </td>
  );
};
