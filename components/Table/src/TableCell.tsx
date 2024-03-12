import React, { AnchorHTMLAttributes, ComponentType, TdHTMLAttributes } from 'react';
import clsx from 'clsx';
import { BasicLink } from '@gemeente-denhaag/link';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  href?: string;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
}

/**
 * TableCell component based on the <td> element.
 * Defines a cell of a table that contains data. It participates in the table model.
 */
export const TableCell: React.FC<TableCellProps> = ({
  className,
  href,
  Link = BasicLink,
  ...props
}: TableCellProps) => {
  const rootClassNames = clsx('denhaag-table__cell', className, {
    'denhaag-table__cell--link': href,
  });

  if (href) {
    return (
      <td className={rootClassNames} {...props}>
        <Link href={href}>{props.children}</Link>
      </td>
    );
  }

  return (
    <td className={rootClassNames} {...props}>
      {props.children}
    </td>
  );
};
